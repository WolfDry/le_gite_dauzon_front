import { useMutation } from '@tanstack/react-query'
import { api } from './api'
import type { Comment } from '../types/Commentaire.type'
import type { AskReservation } from '../types/Reservation.type'

/** Envois des formulaires publics. En cas d'échec, `error` contient l'erreur axios (voir errors.ts). */

export const useCreateReservationRequest = () =>
  useMutation({
    mutationFn: async (payload: AskReservation) =>
      (await api.post<{ id: number }>('/reservations/request', payload)).data,
  })

export const useCreateCommentaire = () =>
  useMutation({
    // L'avis n'apparaît qu'après validation par les propriétaires : inutile de recharger la liste.
    mutationFn: async (payload: Pick<Comment, 'name' | 'commentaire' | 'note'>) =>
      (await api.post('/commentaires', payload)).data,
  })

export type ContactMessage = {
  name: string
  email: string
  message: string
}

export const useSendContactMessage = () =>
  useMutation({
    mutationFn: async (content: ContactMessage) =>
      (await api.post('/mailgun', { subject: 'autre', content })).data,
  })
