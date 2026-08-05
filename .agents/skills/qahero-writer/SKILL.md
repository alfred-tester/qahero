---
name: qahero-writer
description: Habilidad especializada en la redacción y estructuración de entradas (posts) de blog para QAHero, alineadas con la estética Brutalista-Editorial / Periódico Técnico (QAHero Narrative) y validaciones de Astro.
---

# QAHero Blog Writer Skill (`qahero-writer`)

Esta habilidad asiste al agente de IA en la creación de artículos y reportes técnicos para el blog de QA y desarrollo de software. Garantiza que cada post cumpla estrictamente con el sistema de diseño visual de **QAHero Narrative** y los requerimientos técnicos de Astro.

## 📌 Configuración Predeterminada de Archivos

- **Autor:** "Alfred Tejeda"
- **Ruta de Guardado:** `src/content/blog/<slug-del-post>.md` (sustituyendo `<slug-del-post>` por el título del post en minúsculas y separado por guiones).

---

## 📋 Estructura de Metadatos Obligatorios (Frontmatter)

Cada post debe comenzar exactamente con este bloque de metadatos:

```markdown
---
title: "Título Descriptivo y Corto"
description: "Resumen conciso y atractivo del reporte técnico en 1 o 2 líneas."
pubDate: YYYY-MM-DD
author: "Alfred Tejeda"
tags: ["testing", "automation", "api"] # tags en minúscula
status: "Passed" # Valores permitidos: "Passed" | "Testing" | "Failed"
---
```

### Guía de Estados (`status`):
- **`Passed`**: Utilizado para reportes de pruebas exitosas, tutoriales de integraciones estables o guías completas. (Visualmente renderizado en Cyber Green).
- **`Testing`**: Utilizado para investigaciones activas, comparativas técnicas, experimentos en curso o código en fase beta. (Visualmente renderizado en Deep Teal).
- **`Failed`**: Utilizado para autopsias de caídas del sistema (post-mortems), reportes críticos de bugs importantes o antipatrones de código. (Visualmente renderizado en Rojo).

---

## 🎨 Formato y Estructura del Post (QAHero Narrative)

La estética del blog emula la diagramación de un periódico tradicional impreso (Broadsheet) con toques de interfaz técnica de terminal. El agente debe redactar siguiendo estas pautas estructurales:

### 1. Jerarquía de Títulos
- El título del post principal (`h1`) se genera automáticamente a partir del frontmatter `title`.
- Por tanto, dentro del cuerpo del Markdown **solo** se deben usar encabezados de segundo nivel (`##`) o inferiores (`###`).

### 2. Separadores Físicos Rígidos
- Usa `---` para separar secciones lógicas importantes (emula el corte de columnas en la maquetación editorial).

### 3. Tablas Comparativas y Cuadros
- Fomenta la inclusión de tablas comparativas en Markdown para resumir métricas, herramientas o hallazgos. Esto refuerza el aspecto de infografía periodística clásica.
  ```markdown
  | Concepto | Esperado | Obtenido | Resultado |
  | :--- | :--- | :--- | :--- |
  | Carga inicial | < 2s | 1.8s | Passed |
  ```

### 4. Bloques de Código y Terminología
- Envuelve términos de API, comandos y variables de entorno en código inline (p. ej. `npm run dev`).
- Utiliza bloques de código con el lenguaje de programación adecuado especificado para habilitar el resaltado de sintaxis (p. ej. ```typescript).

---

## 🌐 Idioma y Tono Editorial

- **Idioma:** Español neutro y técnico.
- **Tono:** Profesional, directo, riguroso e informativo, emulando a un editor jefe de un periódico científico o de ingeniería de software. Evita rodeos innecesarios o jerga excesivamente informal.

---

## ⚙️ Flujo de Trabajo para el Agente

Cuando el usuario solicite redactar un nuevo post:
1. **Recopilar Información:** Solicita o define el tema, el estado (`status`), los hallazgos y las herramientas involucradas.
2. **Generar Contenido:** Redacta la entrada aplicando las reglas tipográficas, tablas y el frontmatter anterior.
3. **Determinar la fecha actual (UTC):** Usa la fecha actual en formato `YYYY-MM-DD` (p. ej. si hoy es 4 de agosto de 2026, escribe `2026-08-04`).
4. **Guardar el archivo:** Escribe el contenido en `src/content/blog/<slug-del-post>.md`.
5. **Verificar:** Ejecuta de forma opcional `pnpm check` para asegurar la correcta compilación del blog de Astro.
