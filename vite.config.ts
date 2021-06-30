// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  if (command === 'build') {
    if (mode === 'dist') {
      return {
        plugins: [vue()],
        build: {
          outDir: 'dist',
          lib: {
            entry: path.resolve(__dirname, 'src/package/index.ts'),
            name: 'ZEllipsis'
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
          }
        }
      }
    }
    if (mode === 'lib') {
      return {
        plugins: [vue()],
        base: './',
        build: {
          outDir: 'docs'
        }
      }
    }
  }
  return {
    plugins: [vue()],
    server: {
      open: true
    }
  }

}

