import React, { JSX } from 'react'
import {
  startOfMonth,
  subMonths,
  addMonths,
  format,
  getDay,
  getDaysInMonth,
  isWithinInterval,
} from 'date-fns'
import { fr } from 'date-fns/locale'
import { Action, Container, Text, Visual } from '../../atoms'
import { darkBlue, lightGreen, white } from '../../../assets/color'
import { Dates } from '../../../types/App.type'

const daysOfWeek = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM']

type CustomCalendarProps = {
  dates: Dates
  setDates: (dates: Dates) => void
  onDatesChange: (dates: Dates) => void
  side: string
  currentMonth: Date
  changeMonth: (direction: number) => void
  isOnMobile: boolean
  reservedDates?: Dates[]
}

const Calendrier: React.FC<CustomCalendarProps> = ({ dates, setDates, onDatesChange, side, currentMonth, changeMonth, isOnMobile, reservedDates }) => {

  const color = side === "none" ? darkBlue : lightGreen

  const startOfCurrentMonth = startOfMonth(currentMonth)
  const startDay = (getDay(startOfCurrentMonth) + 6) % 7
  const totalDays = getDaysInMonth(currentMonth)

  const prevMonth = subMonths(currentMonth, 1)
  const prevMonthEndDate = getDaysInMonth(prevMonth)
  const daysInPrevMonth = Array.from({ length: startDay }, (_, i) => prevMonthEndDate - startDay + 1 + i)

  const nextMonth = addMonths(currentMonth, 1)
  const nextMonthStart = 7 - ((startDay + totalDays) % 7)
  const daysInNextMonth = Array.from({ length: nextMonthStart }, (_, i) => i + 1)

  const onDayPress = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd')

    let newDates = {
      debut: null,
      fin: null
    } as Dates

    if (!dates.debut || (dates.debut && dates.debut)) {
      newDates.debut = dateString
    }
    if (dates.debut && !dates.fin) {
      newDates.debut = dates.debut
      newDates.fin = dateString
    }

    setDates(newDates)
  }

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

  const renderDay = (date: Date, day: number, isCurrentMonth: boolean) => {
    const dateString = format(date, 'yyyy-MM-dd')
    let isInRange = false
    let isSelected = false
    let isStartDate = false
    let isEndDate = false

    if (dates.debut && dates.fin) {
      if (isWithinInterval(new Date(dateString), { start: new Date(dates.debut), end: new Date(dates.fin) })) {
        isInRange = true
      }
    }
    if (dateString === dates.debut) {
      isStartDate = true
      isSelected = true
    }
    if (dateString === dates.fin) {
      isEndDate = true
      isSelected = true
    }

    reservedDates?.forEach(({ debut, fin }) => {
      if (debut && dateString === format(debut, 'yyyy-MM-dd')) {
        isStartDate = true
        isSelected = true
      }
      if (fin && dateString === format(fin, 'yyyy-MM-dd')) {
        isEndDate = true
        isSelected = true
      }
      if (debut && fin && isWithinInterval(new Date(dateString), {
        start: new Date(debut),
        end: new Date(fin),
      })) {
        isInRange = true
      }
    })

    return (
      <Action.Button
        key={dateString}
        onClick={() => isCurrentMonth && onDayPress(date)}
        height="30px"
        opacity={!isCurrentMonth ? 0 : null}
        borderRadius={
          isSelected
            ? isStartDate
              ? "100px 0 0 100px"
              : isEndDate
                ? "0 100px 100px 0"
                : "0"
            : "0"
        }
        padding="4px 0"
        justifyContent="center"
        alignItems="center"
        background={isInRange ? color : null}
        gap="10px"
        boxShadow=""
        flex="1 0 0"
      >
        {(isSelected || isStartDate || isEndDate) && (
          <Container.Row position="absolute" zIndex={1}>
            <Visual.Svg label="round" />
          </Container.Row>
        )}
        <Text.Paragraph color={isSelected ? white : null} zIndex={2}>
          {day}
        </Text.Paragraph>
      </Action.Button>
    )
  }

  const renderDays = () => {
    const days: JSX.Element[] = []

    daysInPrevMonth.forEach((day) => {
      const date = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), day)
      days.push(renderDay(date, day, false))
    })

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      days.push(renderDay(date, i, true))
    }

    daysInNextMonth.forEach((day) => {
      const date = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day)
      days.push(renderDay(date, day, false))
    })

    return days
  }

  return (
    <Container.Column width="19.4vw" mWidth="100%" padding="1.25rem 0" justifyContent="center" alignItems="center" gap="10px" mDisplay={isOnMobile ? "flex" : "none"} boxShadow={side === "none" ? "4px 4px 20px 0 rgba(23, 28, 25, 0.10)" : ""}>
      <Container.Row direction="row" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Action.Button display={side === "none" ? "none" : "flex"} onClick={() => side === "left" && changeMonth(-1)} padding="0" opacity={side === "right" ? 0 : null} mOpacity="1">
          <Visual.Svg label="leftArrow" width={10} height={15} />
        </Action.Button>
        {
          side === "none" ?
            <Text.Title fontSize="2.5rem">
              {capitalize(format(currentMonth, 'MMMM yyyy', { locale: fr }))}
            </Text.Title>
            :
            <Text.Paragraph fontWeight="700">
              {capitalize(format(currentMonth, 'MMMM yyyy', { locale: fr }))}
            </Text.Paragraph>
        }
        <Action.Button display={side === "none" ? "none" : "flex"} onClick={() => changeMonth(1)} padding="0" opacity={side === "left" ? 0 : null} mOpacity="1">
          <Visual.Svg label="rightArrow" width={10} height={15} />
        </Action.Button>
      </Container.Row>
      <Container.Row direction="row" justifyContent="center" padding="0 10px" alignItems="center" alignSelf="stretch" gap="5px">
        {daysOfWeek.map((d, i) => (
          <Container.Column padding="4px 0" justifyContent="center" alignItems="center" gap="10px" flex="1 0 0">
            <Text.Paragraph fontSize="14px" key={i}>
              {d}
            </Text.Paragraph>
          </Container.Column>
        ))}
      </Container.Row>
      <Container.Grid position="relative" gridTemplateColumn="repeat(7, 1fr)" width="100%">{renderDays()}</Container.Grid>
    </Container.Column>
  )
}

export default Calendrier