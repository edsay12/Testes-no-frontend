import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import { configDefaults } from "vitest/config";
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      exclude: [
        ...configDefaults.coverage.exclude!,
        "*/types/*",
        "src/main.tsx",
      ],
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
});
