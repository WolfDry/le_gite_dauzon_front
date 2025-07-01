import React, { useState } from 'react'
import { Action, Container } from '../../atoms'
import { darkGreen, white } from '../../../assets/color'
import InputsReservationAccueilForm from './InputsReservationAccueilForm'
import InputPersonne from './InputPersonne'

type Value = {
  label: string
  nb: number
}

const ReservationAccueilForm = () => {

  const [initialDates] = useState({
    debut: null,
    fin: null
  })

  const [nbPersonne, setNbPersonne] = useState<Value[]>([{
    label: "Adultes",
    nb: 0
  },
  {
    label: "Enfants",
    nb: 0
  },
  {
    label: "Animaux",
    nb: 0
  }])

  return (
    <Container.Row width="fit-content" mobileWidth="21.25rem" padding="5px" alignItem="center" gap="5px" background={darkGreen} borderRadius="12.5rem" mBorderRadius="1.25rem">
      <InputsReservationAccueilForm initialDates={initialDates} />
      <InputPersonne isInReservation={false} value={nbPersonne} setValue={setNbPersonne} />
      <Action.Link to={"/reservation"} borderRadius="6.25rem" mBorderRadius="7px 7px 15px 15px" padding="0.75rem 2.5rem" background={white} fontSize="1.125rem">Faire une demande</Action.Link>
    </Container.Row>
  )
}

export default ReservationAccueilForm