/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}",
    "./src/**/*.component.{html,ts}",
    "./src/**/*.directive.ts",
    "./src/**/*.pipe.ts",
    "./src/app/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': 800,
      },
      colors: {
        dark: '#2D3052',
        medium: '#424769',
        light: '#9199C7',
        gold: '#F9B17A',
      },
    },
  },
  plugins: [],
  safelist: [
    // Textos
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl',
    // Colores personalizados
    'bg-gold', 'text-gold', 'text-light', 'text-dark', 'text-medium',
    'hover:bg-light', 'bg-light', 'hover:bg-gold',
    // Márgenes
    'm-0', 'mb-0', 'mt-0', 'ml-0', 'mr-0',
    // Fuentes
    'font-raleway', 'font-mono', 'font-bold', 'font-semibold',
    // Patrones
    {
      pattern: /(bg|text|border|hover|m|p|font)-(gold|dark|medium|light|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl)/,
      variants: ['hover', 'focus', 'active', 'sm', 'md', 'lg']
    }
  ],
  corePlugins: {
    preflight: true, // Asegura que los estilos base se apliquen
  }
}