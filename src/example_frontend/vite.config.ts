/// <reference types="vitest" />
import svgr from 'vite-plugin-svgr';
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:4943',
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          icon: true,
        }
      }),
      EnvironmentPlugin('all', { prefix: 'CANISTER_' }),
      EnvironmentPlugin('all', { prefix: 'DFX_' }),
      EnvironmentPlugin(['CANISTER_ID_INDEXER', 'DFX_NETWORK'])
    ],
    resolve: {
      alias: {
          app: '/src/app',
          entities: '/src/entities',
          features: '/src/features',
          pages: '/src/pages',
          shared: '/src/shared',
          widgets: '/src/widgets',
          process: 'process/browser'
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
      },
    },
    define: {
      'process.env': env
    },
  }
})