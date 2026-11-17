import { useState } from 'react'
import { Action, Container, Text } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { cream, green, lightGreen } from '../assets/color'
import EventCard from '../components/molecules/EventCard'
import Socials from '../components/molecules/Socials'
import Footer from '../components/molecules/Footer'
import { Evenement } from '../types/Evenement.type'
import { useEvenements } from '../services/queries'
import { pageMeta } from '../seo'

export const meta = () => pageMeta({
  title: 'À visiter autour de Joyeuse',
  description: "Événements, lieux à visiter et randonnées autour du Gîte d'Auzon, à Joyeuse : nos idées de sorties en Ardèche méridionale pour préparer votre séjour.",
  path: '/visite',
})

const Visite = () => {

  const { data: events = [], isPending, isError } = useEvenements()
  const [activeButton, setActiveButton] = useState("all")

  const currentEvents = activeButton === "all"
    ? events
    : events.filter((event: Evenement) => event.type === activeButton)

  const filterEvents = (filter: string) => {
    setActiveButton(filter)
  }

  return (
    <Container.Column background={cream}>
      <HeroBanner height="40vh" paddingTop="60px" text="Quelques endroits à visiter !" />
      <Container.Wrap padding="3.75rem 6.25rem 0 6.25rem" mPadding="2.5rem 1.25rem 0 1.25rem" justifyContent="center" alignItems="flex-start" gap="15px" alignSelf="stretch">
        <Action.Button onClick={() => filterEvents("EVENT")} padding="7px 15px" borderRadius="5px" background={activeButton === "EVENT" ? green : lightGreen}>
          Événements
        </Action.Button>
        <Action.Button onClick={() => filterEvents("VISIT")} padding="7px 15px" borderRadius="5px" background={activeButton === "VISIT" ? green : lightGreen}>
          Lieux à visiter
        </Action.Button>
        <Action.Button onClick={() => filterEvents("RANDO")} padding="7px 15px" borderRadius="5px" background={activeButton === "RANDO" ? green : lightGreen}>
          Randonnées
        </Action.Button>
        <Action.Button onClick={() => filterEvents("all")} padding="7px 15px" borderRadius="5px" background={activeButton === "all" ? green : lightGreen}>
          Tout afficher
        </Action.Button>
      </Container.Wrap>
      <Container.Wrap padding="3.75rem 6.25rem" mPadding="3.75rem 1.25rem" alignItems="flex-start" alignContent="flex-start" gap="35px" alignSelf="stretch">
        {isPending && <Text.Paragraph textAlign="center" role="status">Chargement des idées de visite…</Text.Paragraph>}
        {isError && <Text.Paragraph textAlign="center" role="alert">Les idées de visite n'ont pas pu être chargées. Rechargez la page pour réessayer.</Text.Paragraph>}
        {currentEvents.map((event: Evenement) => {
          return (<EventCard key={event.id} event={event} />)
        })}
      </Container.Wrap>
      <Container.Row padding="0 6.25rem 1.25rem 6.25rem" mPadding="0 1.25rem 1.25rem 1.25rem" alignSelf="stretch">
        <Text.Paragraph fontWeight="700" fontSize="1.25rem" flex="1 0 0" mFlex="none" textAlign="center">
          Vos hôtes peuvent vous conseiller sur beaucoup d'autres activités, n'hésitez pas à leur demander pendant votre séjour !
        </Text.Paragraph>
      </Container.Row>
      <Container.Column padding="2.5rem 6.25rem" mPadding="1.875rem 1.25rem" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Socials />
      </Container.Column>
      <Footer />
    </Container.Column>
  )
}

export default Visite