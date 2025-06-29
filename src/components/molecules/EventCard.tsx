import React from 'react'
import { Action, Container, Text, Visual } from '../atoms'
import { darkGreen, white } from '../../assets/color'
import { Event } from '../../types/App.type'

type Props = {
  event: Event
}

const EventCard = ({ event }: Props) => {
  return (
    <Container.Column width="27vw" height={!event.link && event.type === "rando" ? "34.4rem" : ""} mWidth="21.875rem" alignItems="flex-start" borderRadius="1.25rem" background={white} boxShadow="4px 4px 20px 0 rgba(23, 28, 25, 0.10)" overflow="hidden">
      <Container.Row position="relative" height="15.625rem" alignItems="center" alignSelf="stretch">
        <Visual.Image src={`/assets/images/events/${event.image}`} height="100%" width="100%" />
        <Container.Column position="absolute" bottom="0" left="0" padding="15px 1.875rem 0 1.25rem" alignItems="flex-start" gap="15px" borderRadius="0 15px 0 0" background={white}>
          <Text.Title>
            {event.title}
          </Text.Title>
        </Container.Column>
      </Container.Row>
      <Container.Column padding="1.25rem" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch" flex="1 0 0">
        <Container.Column alignItems="flex-start" gap="10px" alignSelf="stretch">
          <Text.Paragraph fontWeight="700" alignSelf="stretch">
            {event.type === "event" ? event.date?.toDateString() : event.location}
          </Text.Paragraph>
          <Text.Paragraph display={event.type === "event" ? "" : "none"} fontWeight="700" textAlign="right" alignSelf="stretch">
            {event.location}
          </Text.Paragraph>
          <Text.Paragraph
            height={event.type === "event" ? "8.5rem" : event.link ? "10.625rem" : ""}
            flex={!event.link && event.type === "rando" ? "1 0 0" : "initial"}
            overflow={!event.link && event.type === "rando" ? "visible" : "hidden"}
            alignSelf="stretch"
          >
            {event.description}
          </Text.Paragraph>
        </Container.Column>
        {event.link &&
          <Action.Link to={event.link} justifyContent="center" alignItems="center" gap="10px">
            <Text.Paragraph color={darkGreen}>
              Voir le site
            </Text.Paragraph>
            <Visual.Svg width={9.75} height={9.75} label="rightArrow" fill={darkGreen} />
          </Action.Link>
        }
      </Container.Column>
    </Container.Column>
  )
}

export default EventCard