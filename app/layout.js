import './globals.css'
import { Inter } from 'next/font/google'

import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ARALSAN İNŞAAT A.Ş.',
  description: 'ARALSAN İNŞAAT ve MÜHENDİSLİK ANONİM ŞİRKETİ RESMİ WEBSİTESİ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navigation />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
