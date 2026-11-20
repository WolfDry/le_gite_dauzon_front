import { useMutation } from '@tanstack/react-query'
import { api } from './api'
import type { Comment } from '../types/Commentaire.type'
import type { AskReservation } from '../types/Reservation.type'
import type { AntiBotFields } from '../lib/antiBot'

/**
 * Envois des formulaires publics, avec les champs anti-robot (voir lib/antiBot.tsx).
 * En cas d'échec, `error` contient l'erreur axios (voir errors.ts).
 */

export const useCreateReservationRequest = () =>
  useMutation({
    mutationFn: async (payload: AskReservation & AntiBotFields) =>
      (await api.post<{ id: number }>('/reservations/request', payload)).data,
  })

export const useCreateCommentaire = () =>
  useMutation({
    // L'avis n'apparaît qu'après validation par les propriétaires : inutile de recharger la liste.
    mutationFn: async (payload: Pick<Comment, 'name' | 'commentaire' | 'note'> & AntiBotFields) =>
      (await api.post('/commentaires', payload)).data,
  })

export type ContactMessage = {
  name: string
  email: string
  message: string
}

export const useSendContactMessage = () =>
  useMutation({
    mutationFn: async ({ website, turnstileToken, ...content }: ContactMessage & AntiBotFields) =>
      (await api.post('/mailgun', { subject: 'autre', content, website, turnstileToken })).data,
  })
