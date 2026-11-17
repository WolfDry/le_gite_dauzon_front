import { PassThrough } from 'node:stream'
import type { EntryContext } from 'react-router'
import { ServerRouter } from 'react-router'
import { renderToPipeableStream } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

/**
 * Rendu HTML d'une page. Le site n'a pas de serveur à l'exécution (`ssr: false`) :
 * ce code ne tourne qu'au build (prérendu) et en développement.
 *
 * On attend la fin du rendu complet, puis on insère dans le `<head>` les styles
 * collectés par styled-components, pour que la page s'affiche mise en forme avant
 * même le chargement du JavaScript.
 */
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  if (request.method.toUpperCase() === 'HEAD') {
    return new Response(null, { status: responseStatusCode, headers: responseHeaders })
  }

  const sheet = new ServerStyleSheet()

  return new Promise<Response>((resolve, reject) => {
    const chunks: Buffer[] = []
    const body = new PassThrough()
    body.on('data', (chunk: Buffer) => chunks.push(chunk))
    body.on('error', (error) => {
      sheet.seal()
      reject(error)
    })
    body.on('end', () => {
      try {
        const html = Buffer.concat(chunks).toString('utf8')
        const styles = sheet.getStyleTags()
        sheet.seal()
        responseHeaders.set('Content-Type', 'text/html; charset=utf-8')
        resolve(new Response(html.replace('</head>', `${styles}</head>`), {
          status: responseStatusCode,
          headers: responseHeaders,
        }))
      } catch (error) {
        reject(error)
      }
    })

    const { pipe } = renderToPipeableStream(
      sheet.collectStyles(<ServerRouter context={routerContext} url={request.url} />),
      {
        onAllReady() {
          pipe(body)
        },
        onShellError(error) {
          sheet.seal()
          reject(error)
        },
        onError(error) {
          responseStatusCode = 500
          console.error(error)
        },
      },
    )
  })
}
