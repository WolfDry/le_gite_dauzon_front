import React, { useState } from 'react'
import { Action, Container } from '../../atoms'
import { darkGreen, white } from '../../../assets/color'
import InputsReservationAccueilForm from './InputsReservationAccueilForm'
import InputPersonne from './InputPersonne'

const ReservationAccueilForm = () => {

  const [initialDates, setInitialDates] = useState({
    startDate: null,
    endDate: null
  })

  return (
    <Container.Row width="fit-content" mobileWidth="21.25rem" padding="5px" alignItem="center" gap="5px" background={darkGreen} borderRadius="12.5rem" mBorderRadius="1.25rem">
      <InputsReservationAccueilForm initialDates={initialDates} />
      <InputPersonne />
      <Action.Button mBorderRadius="7px 7px 15px 15px" background={white}>Faire une demande</Action.Button>
    </Container.Row>
  )
}

export default ReservationAccueilForm