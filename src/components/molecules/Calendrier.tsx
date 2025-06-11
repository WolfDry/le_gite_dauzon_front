import React, { useState } from 'react'
import {
  Calendar,
  dateFnsLocalizer,
  View,
  SlotInfo,
} from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { fr } from 'date-fns/locale'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  fr: fr,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

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
    console.log(slotInfo)
    const newEvent: Event = {
      title: 'Nouvel événement',
      start: slotInfo.start,
      end: slotInfo.end,
      allDay: slotInfo.action === 'doubleClick' ? true : slotInfo.slots.length === 1,
    }

    setEvents((prev) => [...prev, newEvent])
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mon Calendrier</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 600 }}
        views={['month', 'week', 'day']}
        view={view}
        onView={(newView) => setView(newView)}
        date={date}
        onNavigate={(newDate) => setDate(newDate)}
        popup
      />
    </div>
  )
}

export default Calendrier
