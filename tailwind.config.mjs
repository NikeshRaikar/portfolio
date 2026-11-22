import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#090B10',
        surface: '#0F131C',
        surfaceHover: '#151B28',
        borderSubtle: 'rgba(255, 255, 255, 0.08)',
        accentCyan: '#22D3EE',
        accentAmber: '#F59E0B',
        accentEmerald: '#10B981',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glowCyan: '0 0 24px -6px rgba(34, 211, 238, 0.35)',
        glowAmber: '0 0 28px -8px rgba(245, 158, 11, 0.25)',
        glowEmerald: '0 0 28px -8px rgba(16, 185, 129, 0.25)',
      },
    },
  },
  plugins: [typography],
};
