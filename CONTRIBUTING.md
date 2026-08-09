# Contribuyendo a QA Hero

¡Gracias por tu interés en colaborar con **QA Hero**! Este es un blog técnico y diario de aseguramiento de calidad de software y desarrollo construido con Astro y estilizado bajo la estética brutalista editorial de periódicos antiguos.

Agradecemos enormemente cualquier aporte, ya sea corrigiendo errores tipográficos, mejorando el código de los componentes o redactando nuevos reportes técnicos sobre automatización, incidentes o herramientas.

---

## 🚀 Proceso de Contribución Rápida

Sigue estos pasos para enviar tu colaboración:

### 1. Obtener Acceso y Clonar
1. Solicita al administrador del repositorio que te agregue como colaborador con permisos de escritura en GitHub.
2. Clona el repositorio oficial directamente:
   ```bash
   git clone https://github.com/alfred-tester/qahero.git
   cd qahero
   ```
3. Instala las dependencias necesarias usando **pnpm**:
   ```bash
   pnpm install
   ```

### 2. Escribir un Nuevo Reporte (Artículo)
1. Crea un nuevo archivo Markdown (`.md`) en el directorio `src/content/blog/` con un nombre representativo (ej: `pruebas-de-carga-k6.md`).
2. Configura los metadatos requeridos en la cabecera (frontmatter) del archivo:
   ```markdown
   ---
   title: "Título corto y conciso de tu reporte"
   description: "Un resumen de un párrafo sobre lo que trata el análisis."
   pubDate: 2026-08-09
   author: "Tu Nombre Completo"
   tags: ["performance", "k6", "automation"]
   status: "Passed" # Valores permitidos: "Passed" | "Testing" | "Failed"
   ---
   ```
3. Redacta el contenido en formato Markdown estándar. Nos encanta que uses bloques de código, diagramas y tablas comparativas.

### 3. Validar Localmente
Antes de confirmar tus cambios, asegúrate de que todo compile perfectamente corriendo las herramientas de verificación local:

```bash
# 1. Iniciar servidor local para revisar el post en tu navegador
pnpm dev

# 2. Correr verificación estática de tipos (TypeScript y Astro)
pnpm check

# 3. Compilar el build estático y verificar que el sitemap se autogenere sin problemas
pnpm build
```

### 4. Abrir un Pull Request (PR)
1. Crea una rama descriptiva para tu cambio: `git checkout -b post/pruebas-de-carga-k6`.
2. Confirma y sube tus cambios directamente a una nueva rama del repositorio oficial:
   ```bash
   git add .
   git commit -m "feat: agregar reporte sobre pruebas de carga con k6"
   git push origin post/pruebas-de-carga-k6
   ```
3. Ve a GitHub y abre un **Pull Request** de tu rama hacia `main`. Nuestro flujo de trabajo automatizado (GitHub Action) compilará el sitio para verificar que no haya errores de build antes de que el administrador apruebe y fusione tu post.

---

## 🎨 Guía de Estilo Editorial (QA Hero Narrative)

* **Escribe de forma clara y objetiva**: Evita introducciones corporativas vacías. Ve directo al problema técnico, las soluciones implementadas y los resultados/métricas obtenidos.
* **Uso de los Estados (`status`)**:
  * **Passed** (Verde): Reportes de flujos estables, guías o soluciones validadas exitosamente.
  * **Testing** (Azul): Investigaciones activas, comparativas o experimentos en fase beta.
  * **Failed** (Rojo): Post-mortems de errores reales, caídas de base de datos o análisis de antipatrones críticos.
