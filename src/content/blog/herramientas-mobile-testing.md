---
title: "Herramientas que todo mobile tester debe conocer"
description: "Una selección de las 3 herramientas esenciales de inspección, red y depuración que todo ingeniero de pruebas móviles funcionales debe dominar hoy en día."
pubDate: 2026-08-04
author: "Alfred Tejeda"
tags: ["mobile", "testing", "vysor", "proxyman", "logs"]
status: "Passed"
---

En el desarrollo de aplicaciones móviles, asegurar la calidad presenta retos únicos: fragmentación de dispositivos, emuladores lentos, condiciones de red inestables y flujos de interfaz complejos. Para hacer frente a estos desafíos sin entrar en el terreno de la automatización de código, contar con herramientas de apoyo visual, diagnóstico y monitoreo de red es indispensable.

Presentamos las tres herramientas fundamentales de inspección física, control de red y diagnóstico de errores que todo tester funcional móvil debe dominar en la actualidad.

---

## 1. Vysor: Control y duplicación de pantalla

**Vysor** es una herramienta esencial para el día a día del mobile tester. Permite proyectar la pantalla de tu dispositivo físico (Android o iOS) directamente en tu ordenador y controlarlo utilizando el teclado y el ratón. 

- **Pruebas en dispositivos reales más cómodas:** Evita tener que estar sujetando el teléfono todo el día; puedes realizar tus flujos funcionales directamente desde tu monitor.
- **Evidencia visual rápida:** Permite capturar imágenes y grabar videos de la pantalla de forma nativa para adjuntarlos a los reportes de error en Jira.
- **Colaboración en equipo:** Facilita enormemente las demostraciones de bugs o sesiones de alineación en llamadas de Teams o Zoom al poder compartir la pantalla del celular sin complicaciones.

---

## 2. Proxyman: Inspección de tráfico de red y APIs

El testing móvil funcional no se limita a lo que se ve en la pantalla. Muchas de las fallas críticas ocurren en la comunicación con el servidor. **Proxyman** actúa como un intermediario (proxy) que intercepta el tráfico HTTPS entre tu dispositivo móvil y el backend.

- **Verificación de peticiones:** Permite validar si al presionar un botón la aplicación envía el payload correcto y recibe la respuesta esperada de la API.
- **Simulación de fallos (Map Local / Breakpoints):** Puedes modificar las respuestas del servidor en tiempo real. Esto es vital para probar cómo reacciona la interfaz móvil ante un error 500, datos vacíos o respuestas extremadamente lentas.
- **Throttling de Red:** Simula conexiones de internet inestables, lentas (3G) o intermitentes para validar el comportamiento de la aplicación en condiciones del mundo real.

---

## 3. Android Logcat y Consola de Xcode: Diagnóstico de caídas (Crashes)

Cuando una aplicación móvil se cierra inesperadamente ("crashea"), un tester funcional no puede limitarse a reportar "la app se cerró". Necesita adjuntar el log del sistema para que el desarrollador sepa exactamente en qué línea falló el código. Para ello, **Logcat** (Android Studio) y la **Consola de Dispositivos** (Xcode) son las herramientas definitivas.

- **Captura de Stack Traces:** Permite extraer el fragmento exacto de código donde ocurrió el fallo (NullPointerExceptions, OutOfMemory, etc.).
- **Monitoreo en tiempo real:** Muestra advertencias de consumo de memoria, renderizado lento y peticiones bloqueadas del sistema operativo.
- **Filtrado inteligente:** Permite buscar por el nombre de la app (package name) o etiquetas de prioridad (`Error`, `Warn`) para limpiar el ruido del sistema y centrarse en lo relevante.

---

## Cuadro comparativo de utilidades

| Herramienta | Área de Aplicación | Beneficio Principal para el Tester | Curva de Aprendizaje |
| :--- | :--- | :--- | :--- |
| **Vysor** | Interacción y UI visual | Comodidad, grabación de pantalla y demostraciones | Muy baja |
| **Proxyman** | Red y Backend (APIs) | Validación de peticiones y simulación de errores de API | Media |
| **Logcat / Consola** | Sistema operativo y Código | Extracción de logs de errores y stack traces de crashes | Media |
