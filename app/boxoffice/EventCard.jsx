import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const EventCard = () => {
  return (
    <span className="shadow bg-white text-white overflow-hidden group font-bold relative aspect-[1/1.5] hover:scale-105 rounded-md transition-all duration-250 antialiased">
      <Link href="/boxoffice">
        <Image className="z-0" fill src="https://picsum.photos/1000/1500" />
      </Link>
      <div className="z-10 bg-white/[1%] blur-sm group-hover:bg-white/[3%] absolute inset-0 -rotate-[70deg] translate-x-[0px] translate-y-[-200px] pointer-events-none group-hover:translate-x-0 group-hover:translate-y-[-175px] transition-all duration-100" />
      <div className="bg-brand-600/50 z-20 absolute top-2 pl-2 pr-6 rounded-r-sm pointer-events-none">Show Title</div>
      <div className="bg-brand-600/50 z-20 absolute bottom-0 font-normal inset-x-0 p-2 flex flex-col gap-1 text-sm">
        <span className="flex gap-1 items-center">
          <FiCalendar />
          <p>Date</p>
        </span>
        <span className="flex gap-1 items-center">
          <FiMapPin />
          <Link className="hover:text-white/70" href="/boxoffice">Venue</Link>
        </span>
      </div>
    </span>
  )
}

export default EventCard