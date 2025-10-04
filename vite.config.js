import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // **เพิ่มบรรทัดนี้เพื่อตั้งค่า Base URL**
  base: '/', 
  plugins: [react()],
})