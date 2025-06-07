import React from 'react'
import { Container, Form, Text, Visual } from '../components/atoms'

import HeroBanner from '../components/molecules/HeroBanner'
import { dark, cream, lightGreen, green, darkGreen, white } from '../assets/color'

const Accueil = () => {
  return (
    <Container.Column width="100vw" background={cream}>
      <HeroBanner />
      <Container.Row justifyContent="center" alignItems="flex-end" marginTop="-12.5rem" padding="0rem 6.25rem 2.5rem 6.25rem">
        <Container.Column width="55vw" marginRight="-1.25rem" background={lightGreen} borderRadius="1.25rem" padding="1.875rem 4.2vw" gap="1.875rem" boxShadow="4px 4px 20px 0px rgba(0,0,0,0.10)" zIndex="1">
          <Text.Title>
            {`Bienvenue au Gîte d'Auzon à Joyeuse,
            en Ardèche méridionale`}
          </Text.Title>
          <Text.Paragraph>
            {`Nathalie et Laurent Deltour vous accueillent toute l'année au Gîte d’Auzon, situé à Joyeuse, charmante cité médiévale en plein cœur de l’Ardèche méridionale.
            À deux pas du centre historique et de ses commodités, notre gîte vous offre le calme, la nature et la douceur de vivre si typiques de la région.

            Proche de Vallon Pont d'Arc, Balazuc, Largentière et Aubenas, il est le point de départ idéal pour partir à la découverte des plus beaux paysages de l'Ardèche.

            Que vous soyez amateur de randonnées, passionné d'histoire, adepte du farniente, ramasseur de châtaignes ou amateur de baignades en rivière, vous trouverez ici votre bonheur.`}
          </Text.Paragraph>
          <Container.Column borderLeft={`2px solid ${dark}`} paddingLeft="0.625rem">
            <Text.Paragraph>Notre gîte n'est pas accessible aux personnes à mobilité réduite.</Text.Paragraph>
          </Container.Column>
          <Container.Row justifyContent="center">
            <Form.Button>
              En savoir plus sur le gîte
            </Form.Button>
          </Container.Row>
        </Container.Column>
        <Visual.Image height="20rem" src="/assets/images/outside.jpg" />
      </Container.Row>
      <Container.Column>
        <Container.Row>
          <Visual.Image width="34.7vw" height="40.625rem" src="/assets/images/accueil/balazuc.jpg" />
          <Container.Column position="relative">
            <Container.Row padding="0 4.8vw">
              <Text.Title>Explorez l'Ardèche méridionale</Text.Title>
            </Container.Row>
            <Container.Column width="48.6vw" gap="1.875rem" padding="2.7vw" position="absolute" top="11rem" left="-6.3vw" borderRadius="1.25rem" background={green}>
              <Text.Title>Balazuc, l'un des Plus Beaux Villages de France</Text.Title>
              <Text.Paragraph>
                Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »
              </Text.Paragraph>
            </Container.Column>
            <Container.Row>

            </Container.Row>
          </Container.Column>
        </Container.Row>
        <Container.Row justifyContent="center">
          <Form.Button background={darkGreen} color={white}>
            Planifier votre séjour
          </Form.Button>
        </Container.Row>
      </Container.Column>
    </Container.Column>
  )
}

export default Accueil