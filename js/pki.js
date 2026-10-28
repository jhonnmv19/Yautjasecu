export async function generarParLlavesRSA() {
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: { name: "SHA-256" },
    },
    true,
    ["sign", "verify"]
  );

  const pubKeyExportada = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);
  const pubKeyPem = arrayBufferToPEM(pubKeyExportada, "PUBLIC KEY");

  const privKeyExportada = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
  const privKeyPem = arrayBufferToPEM(privKeyExportada, "PRIVATE KEY");

  return { publicKey: pubKeyPem, privateKey: privKeyPem };
}

function arrayBufferToPEM(buffer, label) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = window.btoa(binary);
  const wrapped = base64.match(/.{1,64}/g).join("\n");
  return `-----BEGIN ${label}-----\n${wrapped}\n-----END ${label}-----`;
}