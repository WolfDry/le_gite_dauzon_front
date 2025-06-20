import React, { useState } from 'react'
import { Container, Text, Visual } from '../../atoms'
import { white } from '../../../assets/color'
import Calendrier from '../Calendar/Calendrier'

const InputsReservationAccueilForm = () => {

  const [isDisplay, setIsDisplay] = useState(false)

  const show = () => {
    setIsDisplay(!isDisplay)
  }

  return (
    <Container.Column position="relative">
      <Container.Row onClick={() => show()} padding="12px 30px 12px 20px" justifyContent="center" alignItems="center" gap="14px" alignSelf="stretch" borderRadius="100px 7px 7px 100px" background={white} cursor="pointer">
        <Visual.Svg label="calendar" />
        <Text.Paragraph>
          Date d’arrivée - Date de départ
        </Text.Paragraph>
        <Visual.Svg label="bottomArrow" />
      </Container.Row>
      <Container.Row position="absolute" top="65px" display={!isDisplay ? "none" : "flex"} alignItems="center" padding="5px" gap="20px" borderRadius="10px" background={white} zIndex={5}>
        <Calendrier side='left' initialDates={{ startDate: null, endDate: null }} onDatesChange={() => console.log('Changement de date')} />
        <Calendrier side='right' initialDates={{ startDate: null, endDate: null }} onDatesChange={() => console.log('Changement de date')} />
      </Container.Row>
    </Container.Column>
  )
}

export default InputsReservationAccueilForm