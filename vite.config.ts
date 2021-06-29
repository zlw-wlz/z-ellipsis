// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  if (command === 'build') {
    return {
      plugins: [vue()],
      build: {
        outDir: 'dist',
        lib: {
          entry: path.resolve(__dirname, 'src/components/index.ts'),
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
  }else{
    return {
      plugins: [vue()],
      server: {
        open: true
      }
    }
  }

}

