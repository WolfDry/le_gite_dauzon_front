import React, { use, useState } from 'react'
import { Container, Text, Visual } from '../../atoms'
import { white } from '../../../assets/color'
import Calendrier from '../Calendar/Calendrier'
import { addMonths, isBefore, startOfMonth, subMonths } from 'date-fns'

type Props = {
  initialDates: {
    startDate: string | null
    endDate: string | null
  }
}

type Dates = {
  startDate: string | null
  endDate: string | null
}

const InputsReservationAccueilForm = ({ initialDates }: Props) => {

  const [isDisplay, setIsDisplay] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(() => ({
    left: new Date(),
    right: addMonths(new Date(), 1),
  }))
  const [dates, setDates] = useState<Dates>(initialDates)

  const changeMonth = (direction: number) => {
    let newMonth = currentMonth
    if (direction === 1) {
      newMonth = {
        left: addMonths(currentMonth.left, 1),
        right: addMonths(currentMonth.right, 1)
      }
    } else {
      newMonth = {
        left: subMonths(currentMonth.left, 1),
        right: subMonths(currentMonth.right, 1)
      }
    }
    setCurrentMonth(newMonth)
  }

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
        <Calendrier dates={dates} setDates={setDates} side='left' initialDates={initialDates} onDatesChange={() => console.log('Changement de date')} currentMonth={currentMonth.left} changeMonth={changeMonth} />
        <Calendrier dates={dates} setDates={setDates} side='right' initialDates={initialDates} onDatesChange={() => console.log('Changement de date')} currentMonth={currentMonth.right} changeMonth={changeMonth} />
      </Container.Row>
    </Container.Column>
  )
}

export default InputsReservationAccueilForm