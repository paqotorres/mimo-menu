import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Publicado en GitHub Pages: https://paqotorres.github.io/mimo-menu/
  // Si más adelante conectas un dominio propio (ej. mimoestudio.mx), quita
  // "base" y deja site en la raíz de tu dominio.
  site: 'https://paqotorres.github.io',
  base: '/mimo-menu/',
});
