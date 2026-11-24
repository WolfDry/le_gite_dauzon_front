import { useEffect, useRef, useState } from 'react'
import { Action, Container } from '../../atoms'
import { darkGreen, white } from '../../../assets/color'
import InputsReservationAccueilForm from './InputsReservationAccueilForm'
import InputPersonne from './InputPersonne'
import type { Dates, Voyageurs } from '../../../types/App.type'
import { emptyVoyageurs, toReservationSearch } from '../../../lib/reservationParams'

type Panel = 'dates' | 'voyageurs' | null

/** Formulaire de l'accueil : dates et nombre de personnes, transmis à la page Réservation par l'adresse. */
const ReservationAccueilForm = () => {
  const [dates, setDates] = useState<Dates>({ debut: null, fin: null })
  const [voyageurs, setVoyageurs] = useState<Voyageurs>(emptyVoyageurs)
  const [openPanel, setOpenPanel] = useState<Panel>(null)
  const formRef = useRef<HTMLDivElement>(null)

  // Signature imposée par les champs (partagée avec la page Réservation).
  const handleDisplay = (calendarDisplay: boolean | null, personneDisplay: boolean | null) => {
    if (calendarDisplay !== null) setOpenPanel(calendarDisplay ? 'dates' : null)
    else if (personneDisplay !== null) setOpenPanel(personneDisplay ? 'voyageurs' : null)
  }

  // Le calendrier se ferme dès que le séjour est complet (arrivée + départ).
  const handleDates = (next: Dates) => {
    setDates(next)
    if (next.debut && next.fin) setOpenPanel(null)
  }

  // Fermeture au clic en dehors du formulaire ou avec Échap.
  useEffect(() => {
    if (!openPanel) return
    const onPointerDown = (e: PointerEvent) => {
      if (!formRef.current?.contains(e.target as Node)) setOpenPanel(null)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenPanel(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openPanel])

  return (
    <Container.Row
      ref={formRef}
      role="search"
      aria-label="Rechercher des disponibilités"
      width="fit-content"
      mWidth="21.25rem"
      padding="5px"
      alignItems="center"
      gap="5px"
      background={darkGreen}
      borderRadius="12.5rem"
      mBorderRadius="1.25rem"
    >
      <InputsReservationAccueilForm dates={dates} setDates={handleDates} isDisplay={openPanel === 'dates'} handleDisplay={handleDisplay} />
      <InputPersonne isInReservation={false} value={voyageurs} setValue={setVoyageurs} isDisplay={openPanel === 'voyageurs'} handleDisplay={handleDisplay} />
      <Action.Link
        to={`/reservation${toReservationSearch({ dates, voyageurs })}`}
        onClick={() => setOpenPanel(null)}
        borderRadius="6.25rem"
        mBorderRadius="7px 7px 15px 15px"
        padding="0.75rem 2.5rem"
        background={white}
        fontSize="1.125rem"
      >
        Faire une demande
      </Action.Link>
    </Container.Row>
  )
}

export default ReservationAccueilForm
