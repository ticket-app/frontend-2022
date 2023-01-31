import React from 'react'
import EventCard from './EventCard'

const TicketsPage = async () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-white">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  )
}

export default TicketsPage