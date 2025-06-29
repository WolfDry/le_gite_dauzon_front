import React from 'react'
import { Container, Text, Visual } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { lightLightYellow } from '../assets/color'
import Footer from '../components/molecules/Footer'

const Gite = () => {
  return (
    <Container.Column background={lightLightYellow} maxWidth="100vw">
      <HeroBanner height="40vh" paddingTop="60px" />
      <Container.Row height="3.75rem" maxWidth="100vw" background={lightLightYellow} />
      <Container.Row position="relative" height="61.25rem" mHeight="87.625rem">
        <Container.Row position="absolute" height="100%" right="0">
          <Visual.ParallaxAtoms imageSrc="/assets/images/gite/parallax.jpg" width="100vw" height="100%">
            <Container.Row alignItems="center" height="42.5rem" mHeight="60rem">
              <Container.Column background={lightLightYellow} width="27.7vw" height="40%" alignItems="center" alignSelf="flex-end" justifyContent="flex-end" />
              <Container.Column padding="2.5rem 5.5vw" mPadding="0 1.25rem" justifyContent="center" alignItems="flex-start" height="100%" gap="1.875rem" flex="1 0 0" background={lightLightYellow}>
                <Container.Column alignItems="flex-start" gap="15px" alignSelf="stretch">
                  <Text.Title fontSize="1.625rem" textAlign="start">
                    Un gîte tout confort, pensé pour vos vacances
                  </Text.Title>
                  <Text.Paragraph>
                    {`Le gîte, d’une superficie de 50 m², est situé au rez-de-chaussée de la maison des propriétaires.
                Il est prévu pour 4 personnes (ou 5 si un ou plusieurs enfants) et dispose d’une terrasse privée avec salon de jardin.`}
                  </Text.Paragraph>
                </Container.Column>
                <Container.Column alignItems="flex-start" gap="15px" alignSelf="stretch">
                  <Text.Title fontSize="1.625rem" textAlign="start">
                    Composition du logement
                  </Text.Title>
                  <Text.List>
                    <Text.ListItem>
                      Un séjour/cuisine de 27 m² équipé d’un canapé convertible (clic-clac 2 personnes)
                    </Text.ListItem>
                    <Text.ListItem>
                      Une chambre de 15 m² avec un lit double 160×200 (et possibilité de couchage supplémentaire 1 personne)
                    </Text.ListItem>
                    <Text.ListItem>
                      Une salle d’eau avec douche, lavabo et WC
                    </Text.ListItem>
                  </Text.List>
                </Container.Column>
                <Container.Column alignItems="flex-start" gap="15px" alignSelf="stretch">
                  <Text.Title fontSize="1.625rem" textAlign="start">
                    Les équipements à votre disposition
                  </Text.Title>
                  <Text.List>
                    <Text.ListItem>
                      À l’intérieur : télévision, lave-linge, lave-vaisselle, cafetière, senseo, bouilloire, grille-pain, plaque de cuisson au gaz, four, micro-ondes, réfrigérateur-congélateur, fer à repasser, sèche-cheveux.
                    </Text.ListItem>
                    <Text.ListItem>
                      À l’extérieur : barbecue, chaises longues, terrasse ombragée.
                    </Text.ListItem>
                    <Text.ListItem>
                      Connexion internet en Wifi disponible dans tout le gîte.
                    </Text.ListItem>
                  </Text.List>
                </Container.Column>
              </Container.Column>
              <Container.Column background={lightLightYellow} width="27.7vw" height="40%" alignItems="center" alignSelf="flex-start" justifyContent="flex-end" />
            </Container.Row>
            <Container.Row position="relative" height="18.75rem">
              <Container.Row position="absolute" top="0" width="100%" height="3.75rem" background={lightLightYellow} />
            </Container.Row>
          </Visual.ParallaxAtoms>
        </Container.Row>
      </Container.Row >
      <Container.Row padding="3.75rem 6.25rem" mPadding="3.75rem 1.25rem" alignItems="center" gap="5rem" alignSelf="stretch">
        <Container.Row direction="row" width="33vw" mWidth="100%" alignItrems="flex-start" gap="1.25rem" >
          <Container.Column paddingBottom="3.75rem" alignItems="flex-start" gap="1.25rem" flex="1 0 0">
            <Visual.Image src="/assets/images/gite/kitchen.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
            <Visual.Image src="/assets/images/gite/piscine.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
          </Container.Column>
          <Container.Column paddingTop="3.75rem" alignItems="flex-start" gap="1.25rem" flex="1 0 0">
            <Visual.Image src="/assets/images/gite/livingroom.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
            <Visual.Image src="/assets/images/gite/terrasse.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
          </Container.Column>
        </Container.Row>
        <Container.Column justifyContent="center" alignItems="flex-start" gap="1.875rem" flex="1 0 0">
          <Container.Column alignItems="flex-start" gap="15px" alignSelf="stretch">
            <Text.Title fontSize="1.625rem" textAlign="start">
              Piscine
            </Text.Title>
            <Text.Paragraph>
              La piscine (10m X 5m profondeur max 1.60m) est à partager avec les propriétaires. Elle est sécurisée et accessible librement durant votre séjour. Elle se trouve dans un jardin clos à proximité immédiate du gîte.
            </Text.Paragraph>
          </Container.Column>
          <Container.Column alignItems="flex-start" gap="15px" alignSelf="stretch">
            <Text.Title fontSize="1.625rem" textAlign="start">
              Services inclus et options
            </Text.Title>
            <Text.List>
              <Text.ListItem>
                Sont fournis : oreillers, couettes, torchons, serviettes de table, nappe, produits d’entretien.
              </Text.ListItem>
              <Text.ListItem>
                Sur simple demande, sans supplément : lit d’appoint, lit parapluie, matériel de puériculture.
              </Text.ListItem>
              <Text.ListItem>
                En option : location de draps (10 €/parure/semaine) et forfait ménage (70 €).
              </Text.ListItem>
            </Text.List>
          </Container.Column>
          <Container.Column alignItems="flex-start" gap="15px" alignSelf="stretch">
            <Text.Title fontSize="1.625rem" textAlign="start">
              Animaux bienvenus 🐶🐱
            </Text.Title>
            <Text.Paragraph>
              Les chiens et chats sont acceptés avec plaisir.
            </Text.Paragraph>
          </Container.Column>
        </Container.Column>
      </Container.Row>
      <Footer />
    </Container.Column >
  )
}

export default Gite