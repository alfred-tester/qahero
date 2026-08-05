# QAHero Blog - Guía de Desarrollo para LLM

Este proyecto es un blog técnico y diario de aseguramiento de calidad (QA) y desarrollo de software construido con **Astro 7+** y estructurado bajo el sistema de diseño **QAHero Narrative** (Estética Brutalista-Editorial / Periódico Técnico).

---

## 🛠️ Comandos de Desarrollo

El proyecto utiliza **pnpm** como gestor de paquetes. Todos los comandos deben ejecutarse desde el directorio raíz:

- `pnpm dev` - Inicia el servidor de desarrollo local en `http://localhost:4321`.
- `pnpm build` - Genera el build estático de producción en la carpeta `dist/`.
- `pnpm preview` - Levanta un servidor local para previsualizar el build de producción.
- `pnpm check` - Ejecuta la verificación estática de tipos (Astro y TypeScript).

---

## 📂 Estructura del Proyecto

```text
/
├── src/
│   ├── components/
│   │   ├── Header.astro     # Cabecera de periódico con volumen y fecha dinámica en español.
│   │   ├── Footer.astro     # Pie editorial con indicador de estado (status dot) palpitante.
│   │   └── Card.astro       # Tarjeta con borde sólido de 1px y efecto hover de sombra rígida.
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML5. Carga fuentes de Google y define metatags SEO.
│   ├── styles/
│   │   └── global.css       # Reset brutalista global y variables del sistema de diseño.
│   ├── content/
│   │   └── blog/            # Carpeta contenedora de las entradas del blog en Markdown.
│   ├── pages/
│   │   ├── index.astro      # Portada asimétrica del diario digital (titular hero, sidebar).
│   │   └── blog/
│   │       ├── index.astro  # Archivo cronológico vertical separado por líneas (rule-thin).
│   │       └── [...slug].astro # Detalle del reporte con sidebar de ficha técnica lateral.
│   └── content.config.ts    # Configuración moderna de Content Layer (Astro 5+) con glob loader.
├── package.json             # Scripts y dependencias (Astro, TypeScript, @astrojs/check).
└── tsconfig.json            # Configuración de TypeScript de Astro.
```

---

## 🎨 Sistema de Diseño: QAHero Narrative

El estilo visual es **Minimalista-Brutalista**, imitando el diseño impreso de Broadsheets (periódicos tradicionales de gran formato) fusionado con la estética de interfaces de desarrollo de software.

### Variables CSS Clave (`src/styles/global.css`)
- **Fondo:** `--color-background: #f7f9fb` (Gris digital cálido que simula papel).
- **Color Principal / Texto:** `--color-primary: #000000` (Tinta negra absoluta).
- **Acentos:**
  - `--color-secondary: #006877` (Deep Teal para interacciones).
  - `--color-on-tertiary-container: #00984d` (Cyber Green para estados exitosos y terminal).
  - `--color-error: #ba1a1a` (Rojo para estados fallidos).

### Tipografía (Dual-Era)
1. **Playfair Display** (`--font-editorial`): Usada para grandes titulares e isotipos (`h1`, `.display-lg`, `.headline-md`). Debe usarse con pesos gruesos y `letter-spacing` ajustados (`-0.03em`).
2. **Inter** (`--font-functional`): Usada para texto de lectura principal, artículos y párrafos corporales.
3. **JetBrains Mono** (`--font-technical`): Usada para metadatos, tags, código y badges de estado técnico (`code-sm`, `.label-caps`).

### Reglas de Forma y Estructura
- **Esquinas Cuadradas:** Riguroso `border-radius: 0px !important` en todos los componentes.
- **Sin Sombras Difusas:** Se rechazan las sombras difuminadas (`box-shadow` con desenfoque). El efecto hover de las tarjetas usa un desplazamiento físico rígido con sombra sólida:
  ```css
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0px var(--color-primary);
  ```
- **Líneas Editoriales:**
  - `rule-thin` (1px) para dividir secciones en el listado de posts y columnas del grid.
  - `rule-thick` (4px) para separar el Header global del resto del cuerpo.

---

## 📝 Creación de Nuevas Entradas (Posts)

Las entradas deben crearse en la ruta `src/content/blog/` con extensión `.md` o `.mdx`. Cada entrada debe validar contra el esquema definido en `src/content.config.ts`.

### Metadatos Obligatorios (Frontmatter):
```markdown
---
title: "Título Descriptivo y Corto"
description: "Resumen conciso del reporte técnico."
pubDate: 2026-08-04
author: "Nombre del Autor"
tags: ["mobile", "testing", "logs"]
status: "Passed" # Valores permitidos: "Passed" | "Testing" | "Failed"
---
```

### Guía de Estados (`status`):
- **`Passed`** (Verde): Reportes de pruebas exitosas, integraciones estables o guías completadas.
- **`Testing`** (Azul): Investigaciones activas, comparativas o código en fase beta.
- **`Failed`** (Rojo): Post-mortems de caídas del sistema, reporte de bugs o antipatrones críticos.

### Zona Horaria
Al renderizar fechas, se debe especificar la propiedad `timeZone: 'UTC'` en las funciones `.toLocaleDateString()` para evitar desfases causados por el uso de la zona horaria del cliente o el servidor.
