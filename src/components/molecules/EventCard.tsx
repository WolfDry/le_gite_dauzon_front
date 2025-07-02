import React from 'react'
import { Action, Container, Text, Visual } from '../atoms'
import { darkGreen, white } from '../../assets/color'
import { Evenement } from '../../types/Evenement.type'

type Props = {
  event: Evenement
}

const EventCard = ({ event }: Props) => {
  return (
    <Container.Column key={event.id} width="27vw" height={!event.lien && event.type === "RANDO" ? "34.4rem" : ""} mWidth="21.875rem" alignItems="flex-start" borderRadius="1.25rem" background={white} boxShadow="4px 4px 20px 0 rgba(23, 28, 25, 0.10)" overflow="hidden">
      <Container.Row position="relative" height="15.625rem" alignItems="center" alignSelf="stretch">
        <Visual.Image src={`/assets/images/events/${event.image}`} height="100%" width="100%" />
        <Container.Column position="absolute" bottom="0" left="0" padding="15px 1.875rem 0 1.25rem" alignItems="flex-start" gap="15px" borderRadius="0 15px 0 0" background={white}>
          <Text.Title>
            {event.titre}
          </Text.Title>
        </Container.Column>
      </Container.Row>
      <Container.Column padding="1.25rem" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch" flex="1 0 0">
        <Container.Column alignItems="flex-start" gap="10px" alignSelf="stretch">
          <Text.Paragraph fontWeight="700" alignSelf="stretch">
            {event.type === "EVENT"
              ? event.date
                ? new Date(event.date).toLocaleDateString('fr-FR')
                : ""
              : event.localisation}
          </Text.Paragraph>

          <Text.Paragraph display={event.type === "EVENT" ? "" : "none"} fontWeight="700" textAlign="right" alignSelf="stretch">
            {event.localisation}
          </Text.Paragraph>
          <Text.Paragraph
            height={event.type === "EVENT" ? "8.5rem" : event.lien ? "10.625rem" : "14rem"}
            alignSelf="stretch"
          >
            {event.description}
          </Text.Paragraph>
        </Container.Column>
        {event.lien &&
          <Action.ExternalLink to={event.lien} justifyContent="center" alignItems="center" gap="10px">
            <Text.Paragraph color={darkGreen}>
              Voir le site
            </Text.Paragraph>
            <Visual.Svg width={9.75} height={9.75} label="rightArrow" fill={darkGreen} />
          </Action.ExternalLink>
        }
      </Container.Column>
    </Container.Column>
  )
}

export default EventCard