import './globals.css'
import type { Metadata } from 'next'
import { Inter, Croissant_One, Nunito, Dancing_Script} from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section.context'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

const nunito = Nunito({ 
  subsets: ['latin'] ,
  display: "swap",
  variable: '--font-Nunito',
  weight: "200"
})

const croissant = Croissant_One({ 
  subsets: ['latin'] ,
  display: "swap",
  variable: '--font-Croissant_One',
  weight: "400"
})

const dancing = Dancing_Script({ 
  subsets: ['latin'] ,
  display: "swap",
  variable: '--font-Dancing_Script',
  weight: "700"
})

export const metadata: Metadata = {
  title: 'Rizmiya | Portfolio',
  description: 'Rizmiya is a React Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${nunito.variable} ${croissant.variable} ${dancing.variable}`}>

      <body className={`${inter.className} bg-slate-50 text-gray-950 relative`}>
      
        <ActiveSectionContextProvider>
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
        
      </body>
    </html>
  )
}

