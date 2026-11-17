// Sert le build (`build/client`) comme le fera Vercel : `/gite` → `gite/index.html`,
// adresse inconnue → `404.html` avec le code 404. Usage : npm run preview [-- port]
import http from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../build/client')
const port = Number(process.argv[2] ?? 4173)
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const findFile = async (candidate) => {
  try {
    return (await stat(candidate)).isFile() ? candidate : null
  } catch {
    return null
  }
}

http.createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname)
  const target = path.join(root, pathname)
  if (!target.startsWith(root)) {
    res.writeHead(400).end()
    return
  }
  const file = (await findFile(target)) ?? (await findFile(path.join(target, 'index.html')))
  if (file) {
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] ?? 'application/octet-stream' })
    res.end(await readFile(file))
    return
  }
  res.writeHead(404, { 'Content-Type': types['.html'] })
  res.end(await readFile(path.join(root, '404.html')))
}).listen(port, () => console.log(`Build servi sur http://localhost:${port}`))
