import { useState, type ReactNode } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { createQueryClient } from './services/queries'
import ErrorPage from './pages/ErrorPage'

// Polices hébergées avec le site (pas d'appel à Google Fonts ni à Adobe Fonts).
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/handlee/400.css'
import './style.css'

/** Document HTML commun à toutes les pages, y compris la page d'erreur. */
export function Layout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(createQueryClient)

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2E6B45" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/images/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

/** Une page qui plante affiche la page d'erreur, dans le même gabarit que le reste du site. */
export function ErrorBoundary() {
  return <ErrorPage />
}
