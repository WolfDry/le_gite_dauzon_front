import React, { useEffect, useState } from 'react'
import { Container, Text, Visual } from '../../atoms'
import { white } from '../../../assets/color'
import Calendrier from '../Calendar/Calendrier'
import { addMonths, subMonths } from 'date-fns'
import { Dates } from '../../../types/App.type'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../types/Redux.type'
import { updateSelectedDates } from '../../../stores/thunks/appThunks'

type Props = {
  initialDates: {
    debut: string | null
    fin: string | null
  }
}

const InputsReservationAccueilForm = ({ initialDates }: Props) => {

  const dispatch = useDispatch<AppDispatch>()
  const [isDisplay, setIsDisplay] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(() => ({
    left: new Date(),
    right: addMonths(new Date(), 1),
  }))
  const [dates, setDates] = useState<Dates>(initialDates)

  useEffect(() => {
    dispatch(updateSelectedDates(dates))
  }, [dates, dispatch])

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
      <Container.Row onClick={() => show()} direction="row" height="100%" mHeight="3.1875rem" padding="12px 30px 12px 20px" justifyContent="center" alignItems="center" gap="14px" alignSelf="stretch" borderRadius="100px 7px 7px 100px" mBorderRadius="15px 15px 7px 7px" background={white} cursor="pointer">
        <Visual.Svg label="calendar" />
        <Text.Paragraph alignSelf="center">
          {dates.debut
            ? new Date(dates.debut).toLocaleDateString('fr-FR', {
              weekday: 'short',
              day: 'numeric',
              month: 'long',
            }).toLowerCase()
            : "Date d’arrivée"}
          {" - "}
          {dates.fin
            ? new Date(dates.fin).toLocaleDateString('fr-FR', {
              weekday: 'short',
              day: 'numeric',
              month: 'long',
            }).toLowerCase()
            : "Date de départ"}
        </Text.Paragraph>
        <Visual.Svg label="bottomArrow" />
      </Container.Row>
      <Container.Row direction="row" position="absolute" top="65px" display={!isDisplay ? "none" : "flex"} mDisplay={!isDisplay ? "none" : "flex"} alignItems="center" padding="5px" gap="20px" borderRadius="10px" background={white} zIndex={5}>
        <Calendrier dates={dates} setDates={setDates} side='left' currentMonth={currentMonth.left} changeMonth={changeMonth} isOnMobile={true} />
        <Calendrier dates={dates} setDates={setDates} side='right' currentMonth={currentMonth.right} changeMonth={changeMonth} isOnMobile={false} />
      </Container.Row>
    </Container.Column>
  )
}

export default InputsReservationAccueilForm