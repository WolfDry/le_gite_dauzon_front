import { defineConfig } from 'vitest/config'

// Configuration séparée : le plugin React Router de vite.config.ts n'a pas sa place dans les tests.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
