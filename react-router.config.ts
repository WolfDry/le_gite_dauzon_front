import type { Config } from '@react-router/dev/config'
import { copyFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

/** Adresse publique du site, utilisée pour le sitemap. Même valeur que dans src/seo.ts. */
const SITE_URL = (process.env.VITE_SITE_URL ?? 'https://www.legitedauzon.fr').replace(/\/$/, '')

/** Chemin prérendu pour la page introuvable, recopié en `404.html` pour l'hébergeur. */
const NOT_FOUND_PATH = '/404'

/** Liste les pages prérendues (un `index.html` par dossier), sous forme de chemins d'URL. */
const findPages = async (dir: string, base = '/'): Promise<string[]> => {
  const entries = await readdir(dir, { withFileTypes: true })
  const pages: string[] = []
  for (const entry of entries) {
    if (entry.isFile() && entry.name === 'index.html') pages.push(base)
    if (entry.isDirectory() && entry.name !== 'assets') {
      pages.push(...(await findPages(path.join(dir, entry.name), `${base}${entry.name}/`)))
    }
  }
  return pages
}

export default {
  appDirectory: 'src',
  // Pas de serveur à l'exécution : chaque page est rendue en HTML au moment du build.
  ssr: false,
  async prerender({ getStaticPaths }) {
    return [...getStaticPaths(), NOT_FOUND_PATH]
  },
  async buildEnd({ reactRouterConfig }) {
    const clientDir = path.join(reactRouterConfig.buildDirectory, 'client')

    // Vercel sert `404.html` (avec le code 404) pour toute adresse inconnue.
    await copyFile(path.join(clientDir, NOT_FOUND_PATH.slice(1), 'index.html'), path.join(clientDir, '404.html'))

    const pages = (await findPages(clientDir))
      .map((page) => (page === '/' ? page : page.replace(/\/$/, '')))
      .filter((page) => page !== NOT_FOUND_PATH)
      .sort()
    const urls = pages.map((page) => `  <url><loc>${SITE_URL}${page === '/' ? '/' : page}</loc></url>`).join('\n')
    await writeFile(
      path.join(clientDir, 'sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    )
  },
} satisfies Config
