import { isRouteErrorResponse, useRouteError } from 'react-router'
import { Action, Container, Text } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import Footer from '../components/molecules/Footer'
import { cream, darkGreen, white } from '../assets/color'
import { pageMeta } from '../seo'

export const meta = () => pageMeta({
  title: 'Page introuvable',
  description: "Cette page n'existe pas ou a été déplacée. Retrouvez le Gîte d'Auzon, gîte à Joyeuse en Ardèche, depuis la page d'accueil.",
  path: '/404',
  noindex: true,
})

/**
 * Page affichée pour une adresse inconnue (route `*`) et quand une page plante (`errorElement`).
 * Sans erreur de route, ou avec une réponse 404, c'est une page introuvable.
 */
const ErrorPage = () => {
  const error = useRouteError()
  const notFound = !error || (isRouteErrorResponse(error) && error.status === 404)

  if (error) console.error(error)

  return (
    <Container.Column maxWidth="100vw" background={cream}>
      <HeroBanner height="60vh" text={notFound ? 'Page introuvable' : 'Une erreur est survenue'} />
      <Container.Column padding="3.75rem 6.25rem" mPadding="2.5rem 1.25rem" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Text.Paragraph textAlign="center">
          {notFound
            ? "La page que vous cherchez n'existe pas ou a été déplacée."
            : "Cette page n'a pas pu s'afficher. Rechargez-la ou revenez à l'accueil."}
        </Text.Paragraph>
        <Action.Link to="/" background={darkGreen} color={white} padding="0.75rem 2.5rem" borderRadius="6.25rem" fontSize="1.125rem">
          Retour à l'accueil
        </Action.Link>
      </Container.Column>
      <Footer />
    </Container.Column>
  )
}

export default ErrorPage
