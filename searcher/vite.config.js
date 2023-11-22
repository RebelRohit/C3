import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/INB':'http://localhost:8000/INB',
      '/OTB':'http://localhost:8000/OTB',
      // '/login':'http://localhost:8000/login'
    },
  },
  plugins: [react()],
})
