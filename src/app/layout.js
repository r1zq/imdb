import Header from './components/Header'
import MenuItem from './components/MenuItem'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './Providers'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'IMDB Clone',
  description: 'This is a clone of IMDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {/* { navbar } */}

          <Navbar/>
                  
          {/* { searchbox } */}

          {children}
        </Providers>
      </body>
    </html>
  )
}
