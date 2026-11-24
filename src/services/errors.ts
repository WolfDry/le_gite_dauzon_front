import axios from "axios"

/** Message à afficher au visiteur quand l'envoi d'un formulaire échoue. */
export const submitErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status
    if (status === 429) {
      return "Trop d'envois en peu de temps. Merci de réessayer dans quelques minutes."
    }
    if (status === 403) {
      return "La vérification anti-robot n'a pas abouti. Rechargez la page puis réessayez."
    }
    if (status === 409) {
      return "Ces dates ne sont plus disponibles : le gîte vient d'être réservé. Choisissez d'autres dates dans le calendrier."
    }
    if (status === 400) {
      return "Certaines informations ne sont pas valides. Vérifiez le formulaire puis réessayez."
    }
  }
  return "L'envoi n'a pas abouti. Réessayez dans un instant, ou écrivez-nous à legitedauzon@free.fr."
}
