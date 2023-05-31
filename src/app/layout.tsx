import NavBar from './NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sneak peak for Evan',
  description: 'Created by Raphael Carvalho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={inter.className}>
        <div className='h-full bg-gray-200'>
          {children}
        </div>        
      </body>
    </html>
  )
}
