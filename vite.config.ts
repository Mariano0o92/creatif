import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const ASSET_URL = process.env.ASSET_URL || '';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: `${ASSET_URL}/dist/`
})
