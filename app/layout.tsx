import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import ModalProvider from '@/providers/ModalProvider'
import { Toaster } from 'react-hot-toast'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
