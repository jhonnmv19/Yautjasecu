# Yautjasecu - Plataforma de Identidad Digital y Firma Electrónica PKI

Sistema web desarrollado para la gestión de identidades digitales, registro de expedientes, generación de pares de llaves criptográficas (RSA-2048) y firma digital/validación de documentos PDF mediante la Web Crypto API y Supabase.

---

## 🚀 Requisitos del Sistema
*   Navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge) con soporte para **Web Crypto API**.
*   Servidor web local (como *Live Server* en VS Code o cualquier servidor estático HTTP como `http-server`).
*   Cuenta activa en **Supabase** para la persistencia de usuarios, expedientes, hashes y firmas múltiples.

---

## 📂 Estructura del Proyecto
```text
C:.
│   admin.html          # Panel de control y métricas para administradores
│   dashboard.html      # Panel principal del usuario y estado de cuenta
│   index.html          # Página de bienvenida y presentación de Yautjasecu
│   login.html          # Módulo de autenticación de usuarios
│   README.md           # Manual de instalación y documentación
│   register.html       # Registro de usuarios y verificación por código
│   validator.html      # Validador de integridad y firmas de documentos PDF
│   
├───img
│       logo.png        # Logotipo institucional
│   
└───js
        pki.js          # Generación de llaves RSA-2048, exportación PEM y gestión criptográfica
        signer.js       # Cálculo de hashes SHA-256, estampado de firmas y jsPDF
        supabase.js     # Conexión y consultas cliente con Supabase PostgreSQL