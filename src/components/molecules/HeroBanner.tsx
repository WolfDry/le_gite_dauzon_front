import React from 'react'
import { Container, Text } from '../atoms'
import Header from './Header'
import ReservationAccueilForm from './ReservationAccueilForm/ReservationAccueilForm'
import { dark, white } from '../../assets/color'
import { useMatch } from 'react-router-dom'

const HeroBanner = () => {

  return (
    <Container.Column height="100vh">
      <Header />
      <Container.Column height="100vh" justifyContent="center" alignItems="center" gap="1.875rem" background={`linear-gradient(180deg, rgba(23, 28, 25, 0.00) 0%, ${dark} 100%), url(/assets/images/background/accueil.jpg) lightgray 50% / cover no-repeat`}>
        <Text.Title color={white} fontSize="3.125rem">
          {`Location de gîte à Joyeuse en Ardèche
          Le Gîte d’Auzon`}
        </Text.Title>
        {useMatch('/') &&
          <ReservationAccueilForm />
        }
      </Container.Column>
    </Container.Column>
  )
}

export default HeroBanner