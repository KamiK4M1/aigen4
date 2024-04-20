import Navbar from './components/navbar';
import './globals.css'
import { Mitr } from 'next/font/google'

/*const inter = Inter({ subsets: ['latin'] })*/
const mitr = Mitr({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: '514 AI SW2 Classroom',
  description: 'This page is made for 514 AI SW2 Classroom - Made By Kami and Kenny',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mitr.className}>
        <Navbar/>
      {children}</body>
    </html>
  )
}
