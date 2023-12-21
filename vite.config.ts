import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  if (mode === 'development') {
    return {
      plugins: [
        react(),
        Unfonts({
          custom: {
            families: {
              Lato: {
                src: './src/assets/fonts/Lato/Lato*',
              },
            },
          },
        }),
      ],
    }
  };

  if (mode === 'production') {
    return {
      build: {
        sourcemap: true,
        lib: {
          entry: './src/components/index.ts',
          name: 'AppUI',
          fileName: 'index',
          formats: ['es'],
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'clsx', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              clsx: 'clsx',
              'react/jsx-runtime': 'React',
            },
          },
        },
      },
      plugins: [
        react(),
        Unfonts({
          custom: {
            families: {
              Lato: {
                src: './src/assets/fonts/Lato/Lato*',
              },
            },
          },
        }),
        dts({
          include: [
            './src/components/**/*.ts',
            './src/components/**/*.tsx',
          ],
          rollupTypes: true,
        }),
      ],
    }
  }
});
