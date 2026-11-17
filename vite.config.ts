import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRouter()],
  ssr: {
    // styled-components est publié en CommonJS pour Node : on l'intègre au bundle du prérendu
    // pour que `import styled from 'styled-components'` fonctionne comme dans le navigateur.
    noExternal: ['styled-components'],
  },
  server: {
    // Port autorisé par défaut dans la configuration CORS du back en développement.
    port: 3000,
  },
})
