'use client'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

export default function GlobalError() {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div className="p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-red-500">
            Global Error: Something went wrong!
          </h2>
          <p className="text-gray-600">
            Please try refreshing the page or contact support if the problem
            persists.
          </p>
        </div>
      </body>
    </html>
  )
}
