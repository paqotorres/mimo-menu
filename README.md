# Menú Mimo (Astro)

Landing page ilustrada con el menú de la barra de **Mimo Estudio & Barra**, construida con [Astro](https://astro.build).

## Estructura

```
├── public/
│   └── favicon.png          # ícono de pestaña (mark de Mimo)
├── src/
│   ├── assets/               # ilustraciones del personaje y logo (optimizadas en build)
│   ├── layouts/
│   │   └── Layout.astro      # <head>, fuentes de Google (Caveat, Kalam, Poppins), favicon
│   ├── pages/
│   │   └── index.astro       # la página completa (hero, quién es Mimo, menú, footer)
│   └── styles/
│       └── global.css        # tokens de color (claro/oscuro) y todos los estilos
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Build de producción

```bash
npm run build
npm run preview   # para probar el build antes de subirlo
```

El sitio estático queda listo en `dist/`.

## Publicarlo en la web

Es un sitio 100% estático, así que puedes subirlo gratis a cualquiera de estos:

- **Vercel**: `vercel` (detecta Astro automáticamente) o conecta el repo desde vercel.com
- **Netlify**: arrastra la carpeta `dist/` a app.netlify.com/drop, o conecta el repo (build command `npm run build`, publish directory `dist`)
- **Cloudflare Pages**: conecta el repo (build command `npm run build`, output directory `dist`)
- **GitHub Pages**: sube `dist/` con `npx gh-pages -d dist` (agrega `site` en `astro.config.mjs` con tu dominio)

## Editar el contenido

- **Menú real**: reemplaza los items de ejemplo en `src/pages/index.astro` (busca `<div class="item-card">`) y quita la notita "menú de muestra".
- **Dirección, horario y redes**: están al final del archivo, en `<footer>`.
- **Colores**: los hex oficiales de la marca están arriba en `src/styles/global.css` (`--accent`, `--accent-mid`, etc.), tomados del manual de marca.
- **Ilustraciones**: `src/assets/char_*.png` son las 4 poses de Mimo extraídas del PDF "Personaje"; `logo_*` son el logotipo y el isotipo extraídos del PDF del logo.
