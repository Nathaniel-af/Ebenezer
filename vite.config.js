import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import.meta.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
