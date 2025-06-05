import React from 'react'
import { Container, Form, Text, Visual } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { black, green, lightGreen } from '../assets/color'

const Accueil = () => {
  return (
    <Container.Column alignItems={"flex-start"}>
      <HeroBanner />
      <Container.Row width="77.4rem" marginTop="-12.25rem" padding="0 6.25rem 2.5rem 6.25rem" justifyContent="center" alignItem="flex-end">
        <Container.Column width="50rem" padding="1.875rem 3.75rem" marginRight="-1.25rem" alignItem="center" gap="1.875rem" borderRadius="1.25rem" flexShrink="0" boxShadow="4px 4px 20px 0px rgba(0,0,0,0.10)" background={lightGreen} zIndex="1">
          <Container.Column alignItem="flex-start" gap="1.25rem" alignSelf="stretch">
            <Text.Title color={black} textAlign="initial">
              {`Bienvenue au Gîte d'Auzon à Joyeuse,
                en Ardèche méridionale
               `}
            </Text.Title>
            <Text.Paragraph>
              {`Nathalie et Laurent Deltour vous accueillent toute l'année au Gîte d’Auzon, situé à Joyeuse, charmante cité médiévale en plein cœur de l’Ardèche méridionale.
              À deux pas du centre historique et de ses commodités, notre gîte vous offre le calme, la nature et la douceur de vivre si typiques de la région.

              Proche de Vallon Pont d'Arc, Balazuc, Largentière et Aubenas, il est le point de départ idéal pour partir à la découverte des plus beaux paysages de l'Ardèche.

              Que vous soyez amateur de randonnées, passionné d'histoire, adepte du farniente, ramasseur de châtaignes ou amateur de baignades en rivière, vous trouverez ici votre bonheur.`}
            </Text.Paragraph>
            <Container.Row borderLeft="2px solid #171C19" paddingLeft="0.625rem" justifyContent="center" alignItems="center" gap="0.625rem" alignSelf="stretch">
              <Text.Paragraph flex="1 0 0">
                Notre gîte n'est pas accessible aux personnes à mobilité réduite.
              </Text.Paragraph>
            </Container.Row>
          </Container.Column>
          <Form.Button>
            En savoir plus sur le gite
          </Form.Button>
        </Container.Column>
        <Container.Column height="20rem" padding="3.75rem" alignItem="flex-start" alignSelf="flex-end" gap="0.625rem" flex="1 0 0" background="url(/assets/images/outside.jpg) lightgray 50% / cover no-repeat" />
      </Container.Row>
      <Container.Column paddingBottom="2.5rem" justifyContent="center" alignItems="center" gap="2.5rem" alignSelf="stretch">
        <Container.Row padding="0rem 4.375rem" justifyContent="space-between" alignItems="flex-start" alignSelf="stretch">
          <Container.Row background="url(/assets/images/accueil/balazuc.jpg) lightgray 50% / cover no-repeat" width="31.25rem" height="40.625rem" />
          <Container.Column width="47.5rem" height="44.0625rem" paddingTop="4.375rem" alignItems="flex-start" gap="23.6875rem" position="relative">
            <Container.Row padding="0rem 4.375rem" justifyContent="center" alignItems="center" gap="0.625rem" alignSelf="stretch">
              <Text.Title color={black}>
                Explorez l'Ardèche méridionale
              </Text.Title>
            </Container.Row>
            <Container.Column width="43.75rem" padding="2.5rem" justifyContent="center" alignItems="flex-start" gap="1.875rem" position="absolute" left="-5.6875rem" top="11.0625rem" borderRadius="1.25rem" background={green}>
              <Text.Title color={black}>
                Balazuc, l'un des Plus Beaux Villages de France
              </Text.Title>
              <Text.Paragraph alignSelf="stretch">
                Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »
              </Text.Paragraph>
            </Container.Column>
            <Container.Row>

            </Container.Row>
          </Container.Column>
        </Container.Row>
        <Form.Button>
          Planifier votre séjour
        </Form.Button>
      </Container.Column>
    </Container.Column>
  )
}

export default Accueil