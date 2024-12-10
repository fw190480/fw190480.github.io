import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'A showcase of my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

