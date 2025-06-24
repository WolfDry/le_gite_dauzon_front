import React, { useState } from 'react'
import { Action, Container, Text, Visual } from '../components/atoms'

import HeroBanner from '../components/molecules/HeroBanner'
import { dark, cream, lightGreen, green, darkGreen, white } from '../assets/color'
import CommentCard from '../components/molecules/CommentCard'
import Socials from '../components/molecules/Socials'
import Footer from '../components/molecules/Footer'

const Accueil = () => {

  const stays = [
    {
      id: 1,
      title: "Balazuc, l'un des Plus Beaux Villages de France",
      description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
      image: "/assets/images/accueil/balazuc.jpg"
    },
    {
      id: 2,
      title: "Lagorce, l'un des Plus Beaux Villages de France",
      description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
      image: "/assets/images/accueil/balazuc.jpg"
    },
    {
      id: 3,
      title: "Aubenas, l'un des Plus Beaux Villages de France",
      description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
      image: "/assets/images/accueil/balazuc.jpg"
    },
    {
      id: 4,
      title: "Les Vans, l'un des Plus Beaux Villages de France",
      description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
      image: "/assets/images/accueil/balazuc.jpg"
    }
  ]
  const [currentStay, setCurrentStay] = useState(stays[0])

  const comments = [{
    id: 1,
    note: 5,
    nom: "Deltour",
    prenom: "Benjamin",
    date: "27/08/2022",
    commentaire: `Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂`,
  }, {
    id: 2,
    note: 5,
    nom: "Deltour",
    prenom: "Benjamin",
    date: "27/08/2022",
    commentaire: `Nous avons passé un excellent séjour. Les propriétaires sont très accueillants et chaleureux. Tout est fait pour que nous nous sentons bien. Encore merci à eux, nous en gardons de très bons souvenirs. 

    Rien ne manque dans le gîte et même avec plus de 37 degrés dehors, il reste bien frais. La piscine et ses équipements permettent de passer d'agréables moments.

    La ville de Joyeuse et son environnement autour offrent de nombreuses possibilités de visites, de découvertes et d'achat de produits locaux (miel, vin, poterie, saucisson, ...)

    Nous reviendrons avec plaisir en Ardeche et chez eux :)`,
  }, {
    id: 3,
    note: 5,
    nom: "Deltour",
    prenom: "Benjamin",
    date: "27/08/2022",
    commentaire: `Chez Deltour, ça vaut le détour!

    Nous avons passé une excellente semaine dans le gîte de Laurent et Nathalie. On s'y sent "comme à la maison". Le gîte est fonctionnel, très bien équipé et la literie est très bonne. Nous avons également beaucoup apprécié pouvoir nous rafraîchir dans leur grande piscine! Nathalie et Laurent sont des hôtes absolument charmants et très accueillants, toujours souriants et prêts à rendre service. La convivialité est le maître-mot de ce gîte ! 

    Nous recommandons ce gîte sans aucune hésitation et espérons revenir très prochainement pour déguster une bière... Ou deux!!! Et Nico compte bien prendre sa revanche à la pétanque!!!`,
  }]
  const [currentComment, setCurrentComment] = useState(comments[0])

  const changeStay = (index: number) => {
    if (index > stays.length)
      index = 0
    setCurrentStay(stays[index])
  }

  const changeCurrentComment = (direction: string) => {
    let nextComment
    if (direction === "left")
      nextComment = comments.filter(comment => comment.id === (currentComment.id - 1))[0]
    if (direction === "right")
      nextComment = comments.filter(comment => comment.id === (currentComment.id + 1))[0]
    if (!nextComment)
      nextComment = comments[0]
    setCurrentComment(nextComment)
  }

  const switchStay = (direction: string) => {
    let nextStay
    if (direction === "left")
      nextStay = stays.filter(stay => stay.id === (currentStay.id - 1))[0]
    if (direction === "right")
      nextStay = stays.filter(stay => stay.id === (currentStay.id + 1))[0]
    if (!nextStay)
      nextStay = stays[0]
    setCurrentStay(nextStay)
  }

  return (
    <Container.Column width="100vw" background={cream}>
      <HeroBanner />
      <Container.Row justifyContent="center" mJustifyContent="flex-end" alignItems="flex-end" mAlignItems="center" marginTop="-12.5rem" mMarginTop="-4rem" padding="0 6.25rem 2.5rem 6.25rem" mPadding="0 1.25rem 2.5rem 1.25rem" mGap="1.25rem">
        <Container.Column width="55vw" mWidth="92%" marginRight="-1.25rem" background={lightGreen} borderRadius="1.25rem" padding="1.875rem 4.2vw" mPadding="1.875rem 1.25rem" alignSelf="stretch" gap="1.875rem" boxShadow="4px 4px 20px 0px rgba(0,0,0,0.10)" zIndex="1">
          <Text.Title>
            {`Bienvenue au Gîte d'Auzon à Joyeuse,
            en Ardèche méridionale`}
          </Text.Title>
          <Text.Paragraph display="flex">
            {`Nathalie et Laurent Deltour vous accueillent toute l'année au Gîte d’Auzon, situé à Joyeuse, charmante cité médiévale en plein cœur de l’Ardèche méridionale.
            À deux pas du centre historique et de ses commodités, notre gîte vous offre le calme, la nature et la douceur de vivre si typiques de la région.

            Proche de Vallon Pont d'Arc, Balazuc, Largentière et Aubenas, il est le point de départ idéal pour partir à la découverte des plus beaux paysages de l'Ardèche.

            Que vous soyez amateur de randonnées, passionné d'histoire, adepte du farniente, ramasseur de châtaignes ou amateur de baignades en rivière, vous trouverez ici votre bonheur.`}
          </Text.Paragraph>
          <Container.Column borderLeft={`2px solid ${dark}`} paddingLeft="0.625rem">
            <Text.Paragraph>Notre gîte n'est pas accessible aux personnes à mobilité réduite.</Text.Paragraph>
          </Container.Column>
          <Container.Row justifyContent="center">
            <Action.Button background={white}>
              En savoir plus sur le gîte
            </Action.Button>
          </Container.Row>
        </Container.Column>
        <Visual.Image height="20rem" mHeight="auto" mAlignSelf="stretch" mBorderRadius="1.25rem" src="/assets/images/outside.jpg" />
      </Container.Row>
      <Container.Column justifyContent="center" alignItems="center" paddingBottom="2.5rem" gap="2.5rem" alignSelf="stretch">
        <Container.Row justifyContent="space-between" alignSelf="stretch" padding="0 70px" mPadding="0 20px">
          <Visual.Image width="34.7vw" mWidth="auto" height="40.625rem" mHeight="auto" mAlignSelf="stretch" mBorderRadius="1.25rem" src={currentStay.image} />
          <Container.Column position="relative" width="52.7vw" mWidth="auto" mPadding="4.375rem 1.25rem 1.25rem 0" alignItems="flex-start" height="44rem" mHeight="auto" gap="23.69rem" mGap="1.875rem" alignSelf="stretch" paddingTop="4.375rem">
            <Container.Row padding="0 4.8vw" alignSelf="stretch">
              <Text.Title>Explorez l'Ardèche méridionale</Text.Title>
            </Container.Row>
            <Container.Column width="48.6vw" mWidth="auto" gap="1.875rem" mGap="10px" padding="2.7vw" mAlignSelf="stretch" position="absolute" mPosition="initial" top="11rem" left="-6.3vw" borderRadius="1.25rem" background={green}>
              <Text.Title>{currentStay.title}</Text.Title>
              <Text.Paragraph>
                {currentStay.description}
              </Text.Paragraph>
            </Container.Column>
            <Container.Row direction="row" height="12.5rem" mHeight="9.375rem" padding="0 5px" gap="30px" mGap="15px" alignItems="center" alignSelf="stretch">
              <Container.Row onClick={() => switchStay("left")} alignItems="center" cursor="pointer">
                <Visual.Svg label="leftArrow" />
              </Container.Row>
              <Container.Column dierction="row" alignItems="flex-start" gap="10px" overflowX="scroll" flex="1 0 0 ">
                <Container.Row direction="row" gap="10px" alignSelf="stretch">
                  {stays.map((stay, index) => {
                    return (
                      <Visual.Image onClick={() => changeStay(index)} width="13.8vw" mWidth="auto" height="200px" borderRadius="7px" src={stay.image} />
                    )
                  })}
                </Container.Row>
              </Container.Column>
              <Container.Row onClick={() => switchStay("right")} alignItems="center" cursor="pointer">
                <Visual.Svg label="rightArrow" />
              </Container.Row>
            </Container.Row>
          </Container.Column>
        </Container.Row>
        <Container.Row justifyContent="center">
          <Action.Button background={darkGreen} color={white}>
            Planifier votre séjour
          </Action.Button>
        </Container.Row>
      </Container.Column>
      <Container.Row height="42.5rem" mHeight="auto" position="relative" mAlignItems="center" mJustifyContent="center" mPadding="3.75rem 1.25rem">
        <Visual.ParallaxAtoms height="42.5rem" imageSrc='/assets/images/accueil/parallax.jpg' />
        <Container.Column position="absolute" top="50%" left="25%" mLeft="50%" transform="translate(-25%, -50%)" mTransform="translate(-50%, -50%)" width="46.5vw" mWidth="90vw" height="fit-content" padding="2.5rem" mPadding="1.25rem" justifyContent="center" alignItems="center" gap="1.875rem" borderRadius="1.25rem 0 0 1.25rem" mBorderRadius="1.25rem" background={darkGreen} flex="1 0 0" mBoxShadow="4px 4px 20px 0px rgba(0, 0, 0.10)" mBackdropFilter="blur(15px)" zIndex="1">
          <Container.Column alignItems="flex-start" gap="10px">
            <Text.Title color={white} textAlign="start">
              {`Un gîte confortable,
              au cœur de la nature ardéchoise`}
            </Text.Title>
            <Text.Paragraph display="flex" color={white} >
              {`Niché dans un environnement calme et verdoyant, à seulement quelques minutes à pied des commerces et des ruelles médiévales de Joyeuse, le Gîte d’Auzon vous accueille pour un séjour alliant confort, simplicité et authenticité. Vous pourrez rejoindre facilement les marchés provençaux, les petits restaurants et toutes les commodités locales, tout en profitant d'un cadre paisible.

Le gîte est entièrement équipé pour vous offrir un séjour tout confort, que vous veniez en famille, entre amis ou en amoureux. Grâce à son emplacement privilégié, vous accéderez rapidement aux plus beaux sites touristiques de l’Ardèche méridionale.`}
            </Text.Paragraph>
          </Container.Column>
          <Action.Button background={white} color={dark}>
            Voir nos disponibilités
          </Action.Button>
        </Container.Column>
        <Container.Row mDisplay="none" width="50vw" height="7.625rem" position="absolute" background={cream} />
        <Container.Row mDisplay="none" width="50vw" height="5.125rem" position="absolute" bottom="0" right="0" background={darkGreen} />
      </Container.Row>
      <Container.Column alignItems="center" gap="2.5rem" alignSelf="stretch" padding="3.75rem 6.9vw" mDisplay="none">
        <Text.Title>
          Nos vacanciers témoignent
        </Text.Title>
        <Container.Row gap="1.25rem">
          {comments.map((comment => {
            return (
              <CommentCard comment={comment} />
            )
          }))}
        </Container.Row>
        <Action.Button background={darkGreen} color={white}>
          Voir tous les avis
        </Action.Button>
      </Container.Column>
      <Container.Column display="none" mDisplay="flex" padding="1.875rem 1.25rem 2.5rem 1.25rem" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Text.Title>
          Nos vacanciers témoignent
        </Text.Title>
        <Container.Row direction="row" alignItems="center" gap="10px" alignSelf="stretch">
          <Container.Column onClick={() => changeCurrentComment("left")}>
            <Visual.Svg label="leftArrow" />
          </Container.Column>
          <CommentCard comment={currentComment} />
          <Container.Column onClick={() => changeCurrentComment("right")}>
            <Visual.Svg label="rightArrow" />
          </Container.Column>
        </Container.Row>
        <Action.Button background={darkGreen} color={white}>
          Voir tous les avis
        </Action.Button>
      </Container.Column>
      <Container.Row>
        <Visual.Youtube />
      </Container.Row>
      <Container.Column justifyContent="center" alignItems="center" padding="2.5rem 6.9vw" gap="1.875rem">
        <Socials />
      </Container.Column>
      <Footer />
    </Container.Column >
  )
}

export default Accueil