import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const noto = Noto_Sans_KR({
  subsets: ['cyrillic'],
  weight: ['200', '300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'My Top',
  description: 'My top',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  )
}
