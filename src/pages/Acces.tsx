import React from 'react'
import { Container, Text, Visual } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { darkBlue, lightBlue, white } from '../assets/color'
import Socials from '../components/molecules/Socials'
import Footer from '../components/molecules/Footer'

const Acces = () => {
  return (
    <Container.Column>
      <HeroBanner height="60vh" />
      <Container.Row padding="3.75rem 0 2.5rem 6.2rem" mPadding="2.5rem 1.25rem" alignItems="center" gap="5rem" mGap="1.875rem" alignSelf="stretch">
        <Container.Column padding="2.5rem" justifyContent="center" alignItems="flex-start" gap="1.875rem" flex="1 0 0" borderRadius="1.25rem" background={darkBlue}>
          <Text.Title color={white} fontSize="1.625rem" alignSelf="stretch">
            Vous voulez nous rendre une petite visite ?
          </Text.Title>
          <Text.Paragraph alignSelf="stretch" fontSize="1.125rem" fontWeight="700" color={white}>
            En voiture
          </Text.Paragraph>
          <Container.Column alignSelf="stretch">
            <Text.Paragraph alignSelf="stretch" fontSize="1rem" color={white}>
              Le gîte est facilement accessible depuis plusieurs grands axes routiers :
            </Text.Paragraph>
            <Text.List margin="0">
              <Text.ListItem color={white}>
                Par <Text.Label color={white} fontSize="1rem" fontWeight="700">l’autoroute A6</Text.Label> depuis Paris, prenez la sortie Montélimar Nord, puis suivez la direction Aubenas, via Saint-Sernin, puis direction Alès.
              </Text.ListItem>
              <Text.ListItem color={white}>
                Par <Text.Label color={white} fontSize="1rem" fontWeight="700">l’autoroute A75</Text.Label>, sortez à Issoire, puis suivez Le Puy - Aubenas. À la sortie d’Aubenas, continuez en direction d’Alès.
              </Text.ListItem>
              <Text.ListItem color={white}>
                <Text.Label color={white} fontSize="1rem" fontWeight="700">Depuis le sud-est</Text.Label>, empruntez l’A6 jusqu’à la sortie Bollène, puis rejoignez Pont-Saint-Esprit, continuez vers Barjac par les Gorges de la Cèze, et terminez par la direction Aubenas.
              </Text.ListItem>
            </Text.List>
          </Container.Column>
          <Text.Paragraph fontWeight="700" color={white}>
            En train
          </Text.Paragraph>
          <Container.Column alignSelf="stretch">
            <Text.Paragraph color={white}>
              Les gares les plus proches sont celles de <Text.Label color={white} fontSize="1rem" fontWeight="700">Montélimar</Text.Label>, <Text.Label color={white} fontSize="1rem" fontWeight="700">Valence</Text.Label> ou <Text.Label color={white} fontSize="1rem" fontWeight="700">Nîmes</Text.Label> (TGV).
            </Text.Paragraph>
            <Text.Paragraph color={white}>
              Depuis Montélimar ou Valence, des <Text.Label color={white} fontSize="1rem" fontWeight="700">cars TER</Text.Label> desservent directement Joyeuse.
            </Text.Paragraph>
          </Container.Column>
        </Container.Column>
        <Container.Column width="43.75vw" mWidth="auto" alignItems="flex-start" gap="1.875rem" alignSelf="stretch">
          <Visual.Image src="/assets/images/acces/piscine.jpg" width="100%" flex="1 0 0" alignSelf="stretch" borderRadius="1.25rem 0 0 1.25rem" mBorderRadius="10px" />
          <Container.Column padding="0 6.25rem 0 0.625rem" mPadding="0" alignItems="flex-start" gap="10px" alignSelf="stretch">
            <Container.Column padding="5px 0 5px 10px" alignItems="center" borderLeft={`4px solid ${lightBlue}`}>
              <Text.Paragraph>
                {`À 24 Km d'Aubenas, à 80 Km de Montélimar-Nord,
                À 194 Km de Lyon centre, à 655 Km par l'A6 et 640 Km par l'A71 de Paris.`}
              </Text.Paragraph>
              <Text.Paragraph>
                <Text.Label fontSize="1rem" fontWeight="700">Coordonnées GPS</Text.Label> : 44.480566, 4.230369
              </Text.Paragraph>
            </Container.Column>
          </Container.Column>
        </Container.Column>
      </Container.Row>
      <Container.Column height="15.625rem" padding="0 6.25rem" mPadding="0 1.25rem" jusitifyContent="center" alignItems="flex-start" gap="3.125rem" alignSelf="stretch">
        <Visual.Maps />
      </Container.Column>
      <Container.Column padding="2.5rem 6.25rem" mPadding="1.875rem 1.25rem" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Socials />
      </Container.Column>
      <Footer />
    </Container.Column>
  )
}

export default Acces