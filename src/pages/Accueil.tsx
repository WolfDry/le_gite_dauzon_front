import React, { useEffect, useMemo, useState } from 'react'
import { Action, Container, Text, Visual } from '../components/atoms'

import HeroBanner from '../components/molecules/HeroBanner'
import { dark, cream, lightGreen, green, darkGreen, white } from '../assets/color'
import AccueilCommentCard from '../components/molecules/AccueilCommentCard'
import Socials from '../components/molecules/Socials'
import Footer from '../components/molecules/Footer'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../types/Redux.type'
import { useSelector } from 'react-redux'
import { Comment } from '../types/Commentaire.type'
import { getAllCommentaires } from '../stores/thunks/commentaireThunks'


const Accueil = () => {

  const stays = [
    {
      id: 1,
      title: "Balazuc, l'un des Plus Beaux Villages de France",
      description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
      image: "/assets/images/accueil/balazuc.webp"
    },
    {
      id: 2,
      title: "Vogüe, l'un des Plus Beaux Villages de France",
      description: "Enchâssé dans le calcaire de la falaise, le vieux bourg, classé parmi les \"Plus Beaux Villages de France\", forme un amphithéâtre au bord des gorges. Un site pittoresque et réputé pour ses panoramas d’exception… Parmi les lieux à visiter, le château de Vogüé",
      image: "/assets/images/accueil/vogue.webp"
    },
    {
      id: 3,
      title: "Labeaume, l'un des Plus Beaux Villages de France",
      description: "Blotti contre ses falaises calcaires vieilles de plusieurs millénaires, Labeaume est une vraie oasis dans un paysage de garrigues accidentées. Dans ce paysage préservé, l’homme a travaillé pendant des millénaires la terre aride et la roche pour laisser les traces d’une culture ancestrale !",
      image: "/assets/images/accueil/labeaume.webp"
    },
    {
      id: 4,
      title: "Vallon pont d'arc, l'un des Plus Beaux Villages de France",
      description: "Porte d’entrée des Gorges de l’Ardèche, à 2 pas du majestueux Pont d’Arc et de la Grotte Chauvet 2, réplique de l’originale classée au Patrimoine Mondial de l’UNESCO, Vallon Pont d’Arc fait partie des villages incontournables d’Ardèche.",
      image: "/assets/images/accueil/vallon.webp"
    },
    {
      id: 5,
      title: "Banne, l'un des Plus Beaux Villages de France",
      description: "Vestige unique d’une époque oubliée, Banne, village de caractère incontournable en Ardèche, prend ses racines dans le Néolithique. Ce village niché au pied des Cévennes face à la plaine calcaire ardéchoise se distingue par la présence atypique de 27 dolmens : les preuves d’une histoire locale millénaire… Composé de deux bourgs perchés et traversé par un vallon de terrasses cultivées, le village cache bien des perles architecturales : les écuries du Fort, qui accueillent les nombreuses festivités d’été, surmontées des vestiges de son château moyenâgeux mais aussi l’église Saint-Pierre de Banne datant du XIIe siècle.",
      image: "/assets/images/accueil/banne.webp"
    }
  ]
  const dispatch = useDispatch<AppDispatch>()
  const [currentStay, setCurrentStay] = useState(stays[0])
  const comments = useSelector((state: any) => state.comment.commentaires ?? [])
  const [currentComment, setCurrentComment] = useState<Comment | null>(null)

  const verifiedComments = useMemo(() => {
    return comments.filter((c: Comment) => c.verif).slice(0, 3)
  }, [comments])

  useEffect(() => {
    dispatch(getAllCommentaires())
  }, [dispatch])

  useEffect(() => {
    if (verifiedComments && verifiedComments.length > 0 && !currentComment) {
      setCurrentComment(verifiedComments[0])
    }
  }, [verifiedComments, currentComment])


  const changeStay = (index: number) => {
    if (index > stays.length)
      index = 0
    setCurrentStay(stays[index])
  }

  const changeCurrentComment = (direction: "left" | "right") => {
    if (!currentComment || verifiedComments.length === 0) return

    const currentIndex = verifiedComments.findIndex((c: Comment) => c.id === currentComment.id)

    let newIndex
    if (direction === "left") {
      newIndex = (currentIndex - 1 + verifiedComments.length) % verifiedComments.length
    } else {
      newIndex = (currentIndex + 1) % verifiedComments.length
    }

    setCurrentComment(verifiedComments[newIndex])
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
    <Container.Column maxWidth="100vw" background={cream}>
      <HeroBanner height="100vh" />
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
            <Action.Link to={"/gite"} padding="0.75rem 2.5rem" borderRadius="6.25rem" background={white} fontSize="1.125rem">
              En savoir plus sur le gîte
            </Action.Link>
          </Container.Row>
        </Container.Column>
        <Visual.Image height="20rem" mHeight="auto" mAlignSelf="stretch" mBorderRadius="1.25rem" src="/assets/images/outside.webp" />
      </Container.Row>
      <Container.Column justifyContent="center" alignItems="center" paddingBottom="2.5rem" gap="2.5rem" alignSelf="stretch">
        <Container.Row justifyContent="space-between" alignSelf="stretch" padding="0 70px" mPadding="0 20px">
          <Visual.Image width="34.7vw" mWidth="auto" height="40.625rem" mHeight="auto" mAlignSelf="stretch" mBorderRadius="1.25rem" src={currentStay.image} objectFit="cover" />
          <Container.Column position="relative" width="52.7vw" mWidth="auto" mPadding="4.375rem 1.25rem 1.25rem 0" alignItems="flex-start" height="44rem" mHeight="auto" gap="23.69rem" mGap="1.875rem" alignSelf="stretch" paddingTop="4.375rem">
            <Container.Row padding="0 4.8vw" alignSelf="stretch">
              <Text.Title>Explorez l'Ardèche méridionale</Text.Title>
            </Container.Row>
            <Container.Column width="48.6vw" mWidth="auto" gap="1.875rem" mGap="10px" padding="2.7vw" mAlignSelf="stretch" position="absolute" mPosition="initial" top="11rem" left="-6.3vw" borderRadius="1.25rem" background={green}>
              <Text.Title textAlign="start">{currentStay.title}</Text.Title>
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
          <Action.Link to={"/visite"} background={darkGreen} color={white} padding="0.75rem 2.5rem" borderRadius="6.25rem" fontSize="1.125rem">
            Planifier votre séjour
          </Action.Link>
        </Container.Row>
      </Container.Column>
      <Container.Row height="42.5rem" mHeight="auto" position="relative" mAlignItems="center" mJustifyContent="center" mPadding="3.75rem 1.25rem">
        <Visual.ParallaxAtoms height="42.5rem" imageSrc='/assets/images/accueil/parallax.webp' />
        <Container.Column position="absolute" top="50%" left="25%" mLeft="50%" transform="translate(-25%, -50%)" mTransform="translate(-50%, -50%)" width="46.5vw" mWidth="90vw" height="32.25rem" mHeight="fit-content" padding="2.5rem" mPadding="1.25rem" justifyContent="center" alignItems="center" gap="1.875rem" borderRadius="1.25rem 0 0 1.25rem" mBorderRadius="1.25rem" background={darkGreen} flex="1 0 0" mBoxShadow="4px 4px 20px 0px rgba(0, 0, 0.10)" mBackdropFilter="blur(15px)" zIndex="1">
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
          <Action.Link to={"/reservation"} background={white} color={dark} padding="0.75rem 2.5rem" borderRadius="6.25rem" fontSize="1.125rem">
            Voir nos disponibilités
          </Action.Link>
        </Container.Column>
        <Container.Row mDisplay="none" width="50vw" height="7.625rem" position="absolute" background={cream} />
        <Container.Row mDisplay="none" width="50vw" height="5.125rem" position="absolute" bottom="0" right="0" background={darkGreen} />
      </Container.Row>
      <Container.Column alignItems="center" gap="2.5rem" alignSelf="stretch" padding="3.75rem 6.9vw" mDisplay="none">
        <Text.Title>
          Nos vacanciers témoignent
        </Text.Title>
        <Container.Row gap="1.25rem">
          {verifiedComments.map(((comment: Comment) => {
            return (
              <AccueilCommentCard comment={comment} />
            )
          }))}
        </Container.Row>
        <Action.Link to={"/commentaire"} background={darkGreen} padding="0.75rem 2.5rem" borderRadius="6.25rem" color={white} fontSize="1.125rem">
          Voir tous les avis
        </Action.Link>
      </Container.Column>
      <Container.Column display="none" mDisplay="flex" padding="1.875rem 1.25rem 2.5rem 1.25rem" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Text.Title>
          Nos vacanciers témoignent
        </Text.Title>
        <Container.Row direction="row" alignItems="center" gap="10px" alignSelf="stretch">
          <Container.Column onClick={() => changeCurrentComment("left")}>
            <Visual.Svg label="leftArrow" />
          </Container.Column>
          <AccueilCommentCard comment={currentComment} />
          <Container.Column onClick={() => changeCurrentComment("right")}>
            <Visual.Svg label="rightArrow" />
          </Container.Column>
        </Container.Row>
        <Action.Link to={"/commentaire"} background={darkGreen} padding="0.75rem 2.5rem" borderRadius="6.25rem" color={white} fontSize="1.125rem">
          Voir tous les avis
        </Action.Link>
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