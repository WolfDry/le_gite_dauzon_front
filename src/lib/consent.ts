import { useSyncExternalStore } from 'react'

/**
 * Accord du visiteur pour afficher des contenus de sites tiers (vidéo YouTube, carte Google Maps).
 *
 * Ces services déposent des cookies et collectent des données de navigation : rien n'est chargé
 * avant que le visiteur clique sur « Afficher ». S'il choisit « Toujours afficher », son choix est
 * mémorisé dans le navigateur (localStorage) et peut être retiré depuis la page Confidentialité.
 */
export type ExternalProvider = 'youtube' | 'google-maps'

export const EXTERNAL_PROVIDERS: Record<ExternalProvider, { name: string, content: string, privacyUrl: string }> = {
  youtube: {
    name: 'YouTube',
    content: 'la vidéo',
    privacyUrl: 'https://policies.google.com/privacy',
  },
  'google-maps': {
    name: 'Google Maps',
    content: 'la carte',
    privacyUrl: 'https://policies.google.com/privacy',
  },
}

const STORAGE_PREFIX = 'consentement:'
const CHANGE_EVENT = 'consentement-change'

const read = (provider: ExternalProvider): boolean => {
  try {
    return window.localStorage.getItem(STORAGE_PREFIX + provider) === 'oui'
  } catch {
    return false
  }
}

export const setConsent = (provider: ExternalProvider, granted: boolean) => {
  try {
    if (granted) window.localStorage.setItem(STORAGE_PREFIX + provider, 'oui')
    else window.localStorage.removeItem(STORAGE_PREFIX + provider)
  } catch {
    // Stockage indisponible (navigation privée…) : l'accord vaut pour cet affichage seulement.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

/** Accord mémorisé pour ce service. Toujours `false` au prérendu. */
export const useStoredConsent = (provider: ExternalProvider) =>
  useSyncExternalStore(subscribe, () => read(provider), () => false)
