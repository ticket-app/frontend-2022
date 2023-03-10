import React from 'react'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'

const TicketsLayout = async ({children}) => {
  return (
    <html>
      <head />
      <body className="bg-brand-50 min-h-screen flex flex-col">
        <nav className="bg-brand-800 text-white">
          <div className="container max-w-4xl mx-auto flex justify-between items-center py-2">
            <span className="flex gap-4">
            <Link href="/boxoffice">Home</Link>
            <Link href="/boxoffice">Shows</Link>
            <Link href="/boxoffice">Merchandise</Link>
            <Link href="/boxoffice">Donate</Link>
            </span>
            <span className="flex gap-4 items-center">
              <span>Login or Register</span>
              <FiShoppingCart className="text-lg" />
            </span>
          </div>
        </nav>
        <header className="bg-brand-600 text-white">
          <div className="container max-w-4xl mx-auto py-2">
          Venue Logo
          </div>
        </header>
        <main className="flex-1">
          <div className="container max-w-4xl mx-auto">
            {children}
          </div>
        </main>
        <footer className="bg-brand-900 text-white">
          <div className="container max-w-4xl mx-auto py-2">
            Footer
          </div>
        </footer>
      </body>
    </html>
  )
}

export default TicketsLayout