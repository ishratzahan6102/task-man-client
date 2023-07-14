import Navbar from '@/component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ToDo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='max-w-[1200px] mx-auto '>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
