import React from 'react'
import { Container, Form, Text } from '../atoms'
import { green } from '../../assets/color'
import InputsReservationAccueilForm from './InputsReservationAccueilForm'

const ReservationAccueilForm = () => {
  return (
    <Container.Row width="fit-content" padding="0.3125rem" alignItem="center" gap="0.3125rem" background={green} borderRadius="12.5rem">
      <InputsReservationAccueilForm />
      <InputsReservationAccueilForm />
      <Form.Input type="number" placeholder="Nombre de personnes" />
      <Form.Button>Faire une demande</Form.Button>
    </Container.Row>
  )
}

export default ReservationAccueilForm