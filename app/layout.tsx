import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import Sidebar from './components/Sidebar'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mobile Track - Taxi Management',
  description: 'Professional taxi dispatch and management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.className} ${geistMono.className} font-sans antialiased bg-slate-950 text-slate-50`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>

        <Toaster richColors position="top-right" />
        <Analytics />
      </body>
    </html>
  )
}
