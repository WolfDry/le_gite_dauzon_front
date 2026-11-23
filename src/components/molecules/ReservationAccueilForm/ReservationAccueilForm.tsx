import { useState } from 'react'
import { Action, Container } from '../../atoms'
import { darkGreen, white } from '../../../assets/color'
import InputsReservationAccueilForm from './InputsReservationAccueilForm'
import InputPersonne from './InputPersonne'
import { Dates, Voyageurs } from '../../../types/App.type'
import { emptyVoyageurs, toReservationSearch } from '../../../lib/reservationParams'

/** Formulaire de l'accueil : dates et nombre de personnes, transmis à la page Réservation par l'adresse. */
const ReservationAccueilForm = () => {

  const [dates, setDates] = useState<Dates>({ debut: null, fin: null })
  const [voyageurs, setVoyageurs] = useState<Voyageurs>(emptyVoyageurs)
  const [isCalendarDisplay, setIsCalendarDisplay] = useState(false)
  const [isPersonneDisplay, setIsPersonneDisplay] = useState(false)

  const handleClick = (calendarDisplay: boolean | null, personneDisplay: boolean | null) => {
    if (calendarDisplay !== null) {
      setIsCalendarDisplay(calendarDisplay)
      setIsPersonneDisplay(false)
    }
    if (personneDisplay !== null) {
      setIsCalendarDisplay(false)
      setIsPersonneDisplay(personneDisplay)
    }
  }

  return (
    <Container.Row width="fit-content" mobileWidth="21.25rem" padding="5px" alignItem="center" gap="5px" background={darkGreen} borderRadius="12.5rem" mBorderRadius="1.25rem">
      <InputsReservationAccueilForm dates={dates} setDates={setDates} isDisplay={isCalendarDisplay} handleDisplay={handleClick} />
      <InputPersonne isInReservation={false} value={voyageurs} setValue={setVoyageurs} isDisplay={isPersonneDisplay} handleDisplay={handleClick} />
      <Action.Link to={`/reservation${toReservationSearch({ dates, voyageurs })}`} borderRadius="6.25rem" mBorderRadius="7px 7px 15px 15px" padding="0.75rem 2.5rem" background={white} fontSize="1.125rem">Faire une demande</Action.Link>
    </Container.Row>
  )
}

export default ReservationAccueilForm
