import { useId, useMemo, useState } from 'react'
import { addMonths, format, isBefore, parseISO, startOfMonth } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Container, Text, Visual } from '../../atoms'
import { white } from '../../../assets/color'
import Calendrier from '../Calendar/Calendrier'
import type { Dates } from '../../../types/App.type'
import { useDisponibilites } from '../../../services/queries'
import { toPeriodes } from '../../../lib/disponibilites'

type Props = {
  dates: Dates
  setDates: (dates: Dates) => void
  isDisplay: boolean
  handleDisplay: (calendarDisplay: boolean | null, personneDisplay: boolean | null) => void
}

/** « sam. 3 juillet ». parseISO lit la date en heure locale (new Date('2027-07-03') la lit en UTC). */
const formatDate = (value: string | null, placeholder: string) =>
  value ? format(parseISO(value), 'EEE d MMMM', { locale: fr }) : placeholder

const InputsReservationAccueilForm = ({ dates, setDates, isDisplay, handleDisplay }: Props) => {
  const panelId = useId()
  // Jours réservés ou bloqués : grisés dans le calendrier. Chargés seulement à l'ouverture du calendrier.
  const { data: disponibilites } = useDisponibilites({ enabled: isDisplay })
  const unavailable = useMemo(() => toPeriodes(disponibilites ?? []), [disponibilites])

  // Mois affiché à gauche ; celui de droite est toujours le suivant.
  const [leftMonth, setLeftMonth] = useState(() => startOfMonth(new Date()))

  // Pas de retour avant le mois en cours : les jours passés ne sont pas réservables.
  const changeMonth = (direction: number) => {
    setLeftMonth((month) => {
      const next = addMonths(month, direction)
      return isBefore(next, startOfMonth(new Date())) ? month : next
    })
  }

  return (
    <Container.Column position="relative">
      <Container.Row
        as="button"
        type="button"
        onClick={() => handleDisplay(!isDisplay, null)}
        aria-expanded={isDisplay}
        aria-controls={panelId}
        aria-haspopup="dialog"
        direction="row"
        height="100%"
        mHeight="3.1875rem"
        padding="12px 30px 12px 20px"
        justifyContent="center"
        alignItems="center"
        gap="14px"
        alignSelf="stretch"
        border="none"
        borderRadius="100px 7px 7px 100px"
        mBorderRadius="15px 15px 7px 7px"
        background={white}
        cursor="pointer"
      >
        <Visual.Svg label="calendar" />
        <Text.Paragraph alignSelf="center">
          {formatDate(dates.debut, 'Date d’arrivée')}
          {" - "}
          {formatDate(dates.fin, 'Date de départ')}
        </Text.Paragraph>
        <Visual.Svg label="bottomArrow" />
      </Container.Row>
      {/* Rendu seulement à l'ouverture : les mois dépendent de la date du jour, absente de la page prérendue. */}
      {isDisplay && (
        <Container.Row id={panelId} role="dialog" aria-label="Choisir les dates du séjour" direction="row" position="absolute" top="65px" alignItems="flex-start" padding="5px" gap="20px" borderRadius="10px" background={white} zIndex={5}>
          <Calendrier dates={dates} setDates={setDates} side='left' currentMonth={leftMonth} changeMonth={changeMonth} isOnMobile={true} unavailable={unavailable} />
          <Calendrier dates={dates} setDates={setDates} side='right' currentMonth={addMonths(leftMonth, 1)} changeMonth={changeMonth} isOnMobile={false} unavailable={unavailable} />
        </Container.Row>
      )}
    </Container.Column>
  )
}

export default InputsReservationAccueilForm
