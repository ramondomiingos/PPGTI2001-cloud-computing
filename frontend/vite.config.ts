import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log( process.env.VITE_API_URL)

export default defineConfig({
  plugins: [react()],
  define:{
    VITE_API_URL: process.env.VITE_API_URL,
  }
});