import React from 'react'
import { Container, Text } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { lightLightYellow } from '../assets/color'
import { Comment } from '../types/App.type'
import CommentCard from '../components/molecules/CommentCard'
import Footer from '../components/molecules/Footer'

const Commentaire = () => {

  const comments: Comment[] = [{
    id: 1,
    name: "Sandrine, Sébastien",
    date: new Date("03/09/2023"),
    stars: 5,
    text: "Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂"
  }, {
    id: 2,
    name: "Sandrine, Sébastien",
    date: new Date("03/09/2023"),
    stars: 5,
    text: "Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂"
  }, {
    id: 3,
    name: "Sandrine, Sébastien",
    date: new Date("03/09/2023"),
    stars: 5,
    text: "Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂"
  }, {
    id: 4,
    name: "Sandrine, Sébastien",
    date: new Date("03/09/2023"),
    stars: 5,
    text: "Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂"
  }, {
    id: 5,
    name: "Sandrine, Sébastien",
    date: new Date("03/09/2023"),
    stars: 5,
    text: "Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂"
  }, {
    id: 6,
    name: "Sandrine, Sébastien",
    date: new Date("03/09/2023"),
    stars: 5,
    text: "Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂Nous avons passer 1 semaine au gite d'Auzon ,le gite est très confortable ,il ne manque rien ,des hôtes Nathalie et Laurent d'une gentillesse incroyable, une terrasse et piscine extra 👍👍 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂 PS: nous reviendrons bien évidement prochainement pour un bon apéro 😂"
  },]

  return (
    <Container.Column background={lightLightYellow}>
      <HeroBanner height="40vh" paddingTop="60px" text="Ils nous ont fait confiance" />
      <Container.Row padding="3.75rem 6.25rem 1.25rem 6.25rem" justifyContent="center" alignItems="center" gap="10px" alignSelf="stretch">
        <Text.Paragraph flex="1 0 0">
          {`Retrouvez ici tous les avis laissés par nos anciens vacanciers. Leurs retours d’expérience reflètent l’ambiance conviviale, le confort du gîte et la qualité de l’accueil que nous mettons au cœur de chaque séjour.

Vous hésitez encore ? Leurs témoignages vous aideront à vous faire une idée précise de ce qui vous attend au Gîte d’Auzon, en plein cœur de l’Ardèche méridionale.`}
        </Text.Paragraph>
      </Container.Row>
      <Container.Masonry columnCount={3} padding="3.75rem 6.25rem" mPadding="1.25rem 1.25rem 2.5rem 1.25rem" columnGap="2.1875rem" mColumnGap="3.125rem" alignSelf="stretch">
        {comments.map((comment, index) => {
          return (<CommentCard comment={comment} cardIndex={index} />)
        })}
      </Container.Masonry>
      <Footer />
    </Container.Column>
  )
}

export default Commentaire