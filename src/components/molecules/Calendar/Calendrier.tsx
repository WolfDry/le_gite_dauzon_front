import React, { useState, useEffect, JSX } from 'react'
import {
  startOfDay,
  startOfMonth,
  subMonths,
  addMonths,
  isBefore,
  isAfter,
  format,
  getDay,
  getDaysInMonth,
  isWithinInterval,
} from 'date-fns'
import { fr } from 'date-fns/locale'
import { Action, Container, Text, Visual } from '../../atoms'
import { lightGreen, white } from '../../../assets/color'

const daysOfWeek = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM']

type Dates = {
  startDate: string | null
  endDate: string | null
}

type CustomCalendarProps = {
  dates: Dates
  setDates: (dates: Dates) => void
  initialDates: Dates
  onDatesChange: (dates: Dates) => void
  side: string
  currentMonth: Date
  changeMonth: (direction: number) => void
}

const Calendrier: React.FC<CustomCalendarProps> = ({ dates, setDates, initialDates, onDatesChange, side, currentMonth, changeMonth }) => {
  const today = startOfDay(new Date())

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
      startDate: null,
      endDate: null
    } as Dates

    if (!dates.startDate || (dates.startDate && dates.endDate)) {
      newDates.startDate = dateString
    }
    if (dates.startDate && !dates.endDate) {
      newDates.startDate = dates.startDate
      newDates.endDate = dateString
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
    if (dates.startDate && dates.endDate) {
      if (isWithinInterval(dateString, { start: new Date(dates.startDate), end: new Date(dates.endDate) }))
        isInRange = true
    }
    if (dateString === dates.startDate) {
      isStartDate = true
      isSelected = true
    }
    if (dateString === dates.endDate) {
      isEndDate = true
      isSelected = true
    }

    return (
      <Action.Button key={dateString} onClick={() => isCurrentMonth && onDayPress(date)} height="30px" opacity={!isCurrentMonth ? 0 : null} borderRadius={isSelected ? isStartDate ? "100px 0px 0px 100px" : isEndDate ? "0 100px 100px 0" : 0 : 0} padding="4px 0" justifyContent="center" alignItems="center" background={isInRange ? lightGreen : null} gap="10px" boxShadow="" flex="1 0 0">
        {isSelected &&
          <Container.Row position="absolute" zIndex={1}>
            <Visual.Svg label="round" />
          </Container.Row>
        }
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
    <Container.Column width="19.4vw" padding="1.25rem 0" justifyContent="center" alignItems="center" gap="10px">
      <Container.Row justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch">
        {isAfter(currentMonth, today) && (
          <Action.Button onClick={() => side === "left" && changeMonth(-1)} padding="0" opacity={side === "right" ? 0 : null}>
            <Visual.Svg label="leftArrow" width={10} height={15} />
          </Action.Button>
        )}
        <Text.Paragraph fontWeight="700">
          {capitalize(format(currentMonth, 'MMMM yyyy', { locale: fr }))}
        </Text.Paragraph>
        <Action.Button onClick={() => side === "right" && changeMonth(1)} padding="0" opacity={side === "left" ? 0 : null}>
          <Visual.Svg label="rightArrow" width={10} height={15} />
        </Action.Button>
      </Container.Row>
      <Container.Row justifyContent="center" padding="0 10px" alignItems="center" alignSelf="stretch">
        {daysOfWeek.map((d, i) => (
          <Container.Column padding="4px 0" justifyContent="center" alignItems="center" gap="10px" flex="1 0 0">
            <Text.Paragraph key={i}>
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