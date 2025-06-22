import React, { useState } from 'react'
import { Container, Form } from '../../atoms'
import { darkGreen } from '../../../assets/color'
import InputsReservationAccueilForm from './InputsReservationAccueilForm'
import InputPersonne from './InputPersonne'

const ReservationAccueilForm = () => {

  const [initialDates, setInitialDates] = useState({
    startDate: null,
    endDate: null
  })

  return (
    <Container.Row width="fit-content" padding="0.3125rem" alignItem="center" gap="0.3125rem" background={darkGreen} borderRadius="12.5rem">
      <InputsReservationAccueilForm initialDates={initialDates} />
      <InputPersonne />
      <Form.Button>Faire une demande</Form.Button>
    </Container.Row>
  )
}

export default ReservationAccueilForm