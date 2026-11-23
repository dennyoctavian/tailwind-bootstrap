import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Config for building as an installable standalone library
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-lib',
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'ReactBootstrapTailwindUI',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
