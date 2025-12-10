// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✨ 只在生产环境（build 时）使用子路径，开发环境仍是 "/"
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/UIUXPortfolio2026/" : "/",
  plugins: [react()],
}));