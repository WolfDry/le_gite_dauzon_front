import React, { useState } from 'react'
import {
  Calendar,
  dateFnsLocalizer,
  View,
  SlotInfo,
  DateLocalizer,
  HeaderProps,
} from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { fr } from 'date-fns/locale'
import { CalendarStyled } from '../nanites/Container'

const CustomWeekdayHeader: React.FC<HeaderProps> = ({ label }) => {
  return (
    <div style={{ textTransform: 'uppercase', textAlign: 'center' }}>
      {label}
    </div>
  )
}

const localizer: DateLocalizer = dateFnsLocalizer({
  format: (date: Date, formatStr: string, _culture?: string) =>
    format(date, formatStr, { locale: fr }),
  parse: (value: string, formatStr: string) =>
    parse(value, formatStr, new Date(), { locale: fr }),
  startOfWeek: () => startOfWeek(new Date(), { locale: fr }),
  getDay: getDay,
  locales: { fr },
})

// === Traduction des labels ===
const messages = {
  date: 'Date',
  time: 'Heure',
  event: 'Événement',
  allDay: 'Toute la journée',
  week: 'Semaine',
  work_week: 'Semaine de travail',
  day: 'Jour',
  month: 'Mois',
  previous: 'Précédent',
  next: 'Suivant',
  yesterday: 'Hier',
  tomorrow: 'Demain',
  today: "Aujourd'hui",
  agenda: 'Agenda',
  noEventsInRange: 'Aucun événement dans cette période.',
  showMore: (total: number) => `+ ${total} événement(s) supplémentaire(s)`,
}

export interface Event {
  title: string
  start: Date
  end: Date
  allDay?: boolean
}

const Calendrier: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [view, setView] = useState<View>('month')
  const [date, setDate] = useState<Date>(new Date())

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const newEvent: Event = {
      title: 'Nouvel événement',
      start: slotInfo.start,
      end: slotInfo.end,
      allDay: slotInfo.action === 'doubleClick' ? true : slotInfo.slots.length === 1,
    }

    setEvents((prev) => [...prev, newEvent])
  }

  return (
    <CalendarStyled>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        views={['month']}
        view={view}
        onView={setView}
        date={date}
        onNavigate={setDate}
        popup
        messages={messages}
        components={{
          month: {
            header: CustomWeekdayHeader, // 👈 ici on remplace les noms de jours
          },
        }}
      />
    </CalendarStyled>
  )
}

export default Calendrier
