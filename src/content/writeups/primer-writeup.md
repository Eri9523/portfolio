---
title: "Bypass de autenticación en X"
date: 2025-01-01
tags: ["pentesting", "auth", "bypass"]
summary: "Análisis del flujo y exploit PoC"
cover: "/covers/auth-bypass.png"
---

## Contexto

Objetivo: identificar y explotar un desvío en el flujo de autenticación.

## Entorno

- Versión: 1.2.3
- Superficie: `/login`, `/api/session`, `/oauth/callback`

## PoC

```bash
curl -i https://target.example/login -H 'X-Bypass: 1' -H 'X-Forwarded-For: 127.0.0.1'
```

## Mitigaciones

- Validar cabeceras de origen y proxy.
- Fortalecer validaciones de sesión y CSRF.

## Notas

Este writeup es un ejemplo. Sustituye el contenido con tu investigación real. 