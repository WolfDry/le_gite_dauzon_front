import { Container, Text } from '../atoms'
import ReservationAccueilForm from './ReservationAccueilForm'

const HeroBanner = () => {
  return (
    <Container.Column height="100vh" padding="0.625rem" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch" background="linear-gradient(180deg, rgba(23, 28, 25, 0.00) 0%, #171C19 100%), url(/assets/images/background/accueil.jpg) lightgray 50% / cover no-repeat;">
      <Container.Column>
        <Text.Title color="white" textAlign="center" fontSize="3.125rem" fontStyle="normal" fontWeight="400" lineHeight="normal">
          Location de gîte à Joyeuse en Ardèche
        </Text.Title>
        <Text.Title color="white" textAlign="center" fontSize="3.125rem" fontStyle="normal" fontWeight="400" lineHeight="normal">
          Le Gîte d’Auzon
        </Text.Title>
      </Container.Column>
      <ReservationAccueilForm />
    </Container.Column>
  )
}

export default HeroBanner