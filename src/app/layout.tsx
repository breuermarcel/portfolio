import { Metadata } from 'next'
import './globals.css'
import { Sen } from 'next/font/google'

import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Marcel Breuer | Curriculum Vitae',
  description: 'IT-Manager, Business Intelligence Expert, Data Scientist',
}

const font = Sen({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body
        className={`${font.className} bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100 `}
      >
        {children}
      </body>
    </html>
  )
}
