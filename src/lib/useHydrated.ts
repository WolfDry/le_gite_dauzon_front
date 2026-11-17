import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * `false` pendant le prérendu et le premier rendu dans le navigateur (hydratation),
 * `true` ensuite.
 *
 * Les pages sont rendues en HTML au moment du build. Tout ce qui dépend de la date
 * du jour (mois du calendrier, date minimale d'un champ…) doit attendre que ce hook
 * renvoie `true`, sinon le HTML du build et celui du navigateur diffèrent.
 */
export const useHydrated = () => useSyncExternalStore(subscribe, () => true, () => false)
