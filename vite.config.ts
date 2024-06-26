import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,  // Permet de tester le service worker en mode développement
      },
      includeAssets: ['vite.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'logoMauve.png'],
      manifest: {
        name: 'LocaSwipe',
        short_name: 'LocaSwipe',
        description: 'LocaSwipe App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/logoMauve.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
