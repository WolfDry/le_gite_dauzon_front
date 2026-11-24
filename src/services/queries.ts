import { QueryClient, useQuery } from '@tanstack/react-query'
import { api } from './api'
import type { Comment } from '../types/Commentaire.type'
import type { Evenement } from '../types/Evenement.type'
import type { Disponibilite } from '../types/Reservation.type'
import type { Tarif } from '../types/Tarif.type'
import type { Reglages } from '../types/Reglages.type'

/**
 * Lectures de l'API. Elles ne partent que dans le navigateur : au prérendu, les pages
 * sont générées dans leur état « chargement », puis les données arrivent après l'affichage.
 */
export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60_000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  })

const get = async <T>(url: string): Promise<T> => (await api.get<T>(url)).data

/** Avis validés, du plus récent au plus ancien (ordre de l'API). */
export const useCommentaires = () =>
  useQuery({
    queryKey: ['commentaires'],
    queryFn: () => get<Comment[]>('/commentaires'),
    // L'API ne renvoie déjà que les avis validés aux visiteurs ; ce filtre est une sécurité.
    select: (comments) => comments.filter((comment) => comment.verif),
  })

export const useEvenements = () =>
  useQuery({
    queryKey: ['evenements'],
    queryFn: () => get<Evenement[]>('/evenements'),
  })

/** Périodes déjà réservées (options et séjours confirmés). */
export const useDisponibilites = () =>
  useQuery({
    queryKey: ['disponibilites'],
    queryFn: () => get<Disponibilite[]>('/reservations/disponibilites'),
  })

/** Réglages du gîte : taxe de séjour, acompte… */
export const useReglages = () =>
  useQuery({
    queryKey: ['reglages'],
    queryFn: () => get<Reglages>('/reglages'),
  })

/** Tarif mis en forme pour la grille de la page Réservation. */
export type TarifAffiche = Omit<Tarif, 'desc' | 'frequence'> & {
  id: number
  desc: string | null
  /** Fréquences en minuscules, par exemple « semaine / jour ». */
  frequence: string
}

export const useTarifs = () =>
  useQuery({
    queryKey: ['tarifs'],
    queryFn: () => get<Tarif[]>('/tarifs'),
    select: (tarifs): TarifAffiche[] =>
      tarifs
        .map((tarif) => ({
          ...tarif,
          id: tarif.id ?? 0,
          // L'admin enregistrait une espace pour une description vide.
          desc: tarif.desc?.trim() ? tarif.desc : null,
          frequence: tarif.frequence.map((f) => f.toLowerCase()).join(' / '),
        }))
        .sort((a, b) => a.id - b.id),
  })
