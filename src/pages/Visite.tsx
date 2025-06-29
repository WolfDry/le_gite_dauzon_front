import React, { useState } from 'react'
import { Action, Container, Text } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { cream, green, lightGreen } from '../assets/color'
import EventCard from '../components/molecules/EventCard'
import { Event } from '../types/App.type'
import Socials from '../components/molecules/Socials'
import Footer from '../components/molecules/Footer'

const Visite = () => {

  const events: Event[] = [{
    id: 1,
    title: "Balazuc visite",
    date: null,
    type: "visit",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: "google.fr"
  }, {
    id: 2,
    title: "Balazuc event",
    date: new Date(),
    type: "event",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: "google.fr"
  }, {
    id: 3,
    title: "Balazuc rando",
    date: null,
    type: "rando",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: null
  }, {
    id: 3,
    title: "Balazuc rando",
    date: null,
    type: "rando",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: null
  }, {
    id: 3,
    title: "Balazuc rando",
    date: null,
    type: "rando",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: null
  }, {
    id: 3,
    title: "Balazuc rando",
    date: null,
    type: "rando",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: null
  }, {
    id: 3,
    title: "Balazuc rando",
    date: null,
    type: "rando",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: null
  }, {
    id: 3,
    title: "Balazuc rando",
    date: null,
    type: "rando",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: null
  }, {
    id: 3,
    title: "Balazuc rando",
    date: null,
    type: "rando",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: null
  }, {
    id: 3,
    title: "Balazuc rando",
    date: null,
    type: "rando",
    location: "A 14km du gite (20 min de route)",
    description: "Petit village médiéval fortifié, perché au sommet d'une falaise. Accroché à d'impressionnantes roches de calcaire surplombant la rivière Ardèche. Classé parmi « les plus beaux villages de France » et les « Villages de caractère »",
    image: "1.jpg",
    link: null
  }]

  const [currentEvents, setCurrentEvents] = useState(events)

  const filterEvents = (filter: string) => {
    if (filter === "all") {
      setCurrentEvents(events)
      return
    }
    const newEvents = events.filter((event) => event.type === filter)
    setCurrentEvents(newEvents)
  }

  return (
    <Container.Column background={cream}>
      <HeroBanner height="40vh" paddingTop="60px" text="Quelques endroits à visiter !" />
      <Container.Row padding="3.75rem 6.25rem 0 6.25rem" justifyContent="center" alignItems="flex-start" gap="15px" alignSelf="stretch">
        <Action.Button onClick={() => filterEvents("event")} padding="7px 15px" borderRadius="5px" background={lightGreen}>
          Événements
        </Action.Button>
        <Action.Button onClick={() => filterEvents("visit")} padding="7px 15px" borderRadius="5px" background={lightGreen}>
          Lieux à visiter
        </Action.Button>
        <Action.Button onClick={() => filterEvents("rando")} padding="7px 15px" borderRadius="5px" background={lightGreen}>
          Randonnées
        </Action.Button>
        <Action.Button onClick={() => filterEvents("all")} padding="7px 15px" borderRadius="5px" background={green}>
          Tout afficher
        </Action.Button>
      </Container.Row>
      <Container.Wrap padding="3.75rem 6.25rem" alignItems="flex-start" alignContent="flex-start" gap="35px" alignSelf="stretch">
        {currentEvents.map(event => {
          return (<EventCard event={event} />)
        })}
      </Container.Wrap>
      <Container.Row padding="0 6.25rem 1.25rem 6.25rem">
        <Text.Paragraph fontWeight="700" fontSize="1.25rem" flex="1 0 0" textAlign="center">
          Vos hôtes peuvent vous conseiller sur beaucoup d'autres activités, n'hésitez pas à leur demander pendant votre séjour !
        </Text.Paragraph>
      </Container.Row>
      <Container.Column padding="2.5rem 6.25rem" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Socials />
      </Container.Column>
      <Footer />
    </Container.Column>
  )
}

export default Visite