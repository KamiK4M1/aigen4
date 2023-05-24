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
  title: 'Create Next App',
  description: 'Generated by create next app',
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
