import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  // Le plugin React Router de vite.config.ts suppose une application complète :
  // Storybook utilise à la place le plugin React standard.
  viteFinal: async (viteConfig) => {
    const plugins = (viteConfig.plugins ?? []).flat().filter((plugin) => {
      const name = plugin && typeof plugin === 'object' && 'name' in plugin ? String(plugin.name) : ''
      return !name.startsWith('react-router')
    })
    return { ...viteConfig, plugins: [...plugins, react()] }
  },
}

export default config
