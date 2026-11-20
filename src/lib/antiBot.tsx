import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Protection anti-robot des formulaires publics : champ piège et Cloudflare Turnstile.
 *
 * - Le champ piège (`website`) est invisible pour le visiteur ; un robot qui remplit tous les
 *   champs le remplit aussi, et l'API ignore alors l'envoi.
 * - Turnstile n'est chargé qu'au premier clic ou à la première saisie dans le formulaire, pour ne
 *   pas alourdir les pages. Il reste invisible, sauf si Cloudflare demande au visiteur de cocher
 *   une case. Sans `VITE_TURNSTILE_SITE_KEY`, il est désactivé (l'API doit l'être aussi).
 *
 * Utilisation : poser `activate` sur le formulaire (onFocusCapture, onPointerDownCapture),
 * afficher `fields` près du bouton, et envoyer `await getFields()` avec les données.
 */

export type AntiBotFields = {
  website?: string
  turnstileToken?: string
}

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
/** Attente maximale du jeton au moment de l'envoi. Au-delà, l'envoi part sans jeton et l'API le refuse. */
const TOKEN_TIMEOUT_MS = 10_000

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

let scriptPromise: Promise<TurnstileApi> | null = null

const loadTurnstile = (): Promise<TurnstileApi> => {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = SCRIPT_URL
      script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('Turnstile absent')))
      script.onerror = () => {
        scriptPromise = null
        script.remove()
        reject(new Error('Chargement de Turnstile impossible'))
      }
      document.head.appendChild(script)
    })
  }
  return scriptPromise
}

/** Champ piège : hors de l'écran, ignoré par les lecteurs d'écran et la navigation au clavier. */
const Honeypot = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => (
  <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
    <label>
      Ne pas remplir ce champ
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  </div>
)

export const useAntiBot = (): {
  activate: () => void
  fields: ReactNode
  getFields: () => Promise<AntiBotFields>
  reset: () => void
  isVerifying: boolean
} => {
  const [website, setWebsite] = useState('')
  const [active, setActive] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const token = useRef<string | null>(null)
  const waiting = useRef<((token: string | null) => void)[]>([])

  const settle = (value: string | null) => {
    token.current = value
    if (value === null) return
    waiting.current.forEach((resolve) => resolve(value))
    waiting.current = []
  }

  useEffect(() => {
    if (!siteKey || !active || !container.current) return
    let cancelled = false
    const element = container.current

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled) return
        widgetId.current = turnstile.render(element, {
          sitekey: siteKey,
          language: 'fr',
          appearance: 'interaction-only',
          callback: (value: string) => settle(value),
          'expired-callback': () => settle(null),
          'error-callback': () => settle(null),
        })
      })
      .catch((error) => console.error(error))

    return () => {
      cancelled = true
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current)
      widgetId.current = null
      token.current = null
    }
  }, [active])

  const activate = useCallback(() => setActive(true), [])

  const getFields = useCallback(async (): Promise<AntiBotFields> => {
    if (!siteKey) return { website }
    setActive(true)
    if (token.current) return { website, turnstileToken: token.current }

    setIsVerifying(true)
    const turnstileToken = await new Promise<string | null>((resolve) => {
      const timer = setTimeout(() => resolve(null), TOKEN_TIMEOUT_MS)
      waiting.current.push((value) => {
        clearTimeout(timer)
        resolve(value)
      })
    })
    setIsVerifying(false)
    return { website, ...(turnstileToken ? { turnstileToken } : {}) }
  }, [website])

  /** Un jeton ne sert qu'une fois : à appeler après chaque envoi, réussi ou non. */
  const reset = useCallback(() => {
    token.current = null
    if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current)
  }, [])

  const fields = (
    <>
      <Honeypot value={website} onChange={setWebsite} />
      {siteKey && <div ref={container} />}
    </>
  )

  return { activate, fields, getFields, reset, isVerifying }
}
