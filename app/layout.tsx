import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FiveM Scripts | Kostenlose Open Source Scripts',
  description: 'Kostenlose Open Source FiveM Scripts für deinen Server. Optimiert für Performance, Sicherheit und maximale Stabilität. ESX, QBCore und Standalone verfügbar.',
  keywords: ['FiveM', 'Scripts', 'ESX', 'QBCore', 'Standalone', 'GTA V', 'Roleplay', 'Server', 'Open Source', 'Free', 'Kostenlos'],
  authors: [{ name: 'FiveM Scripts' }],
  openGraph: {
    title: 'FiveM Scripts | Kostenlose Open Source Scripts',
    description: 'Kostenlose Open Source FiveM Scripts für deinen Server. Optimiert für Performance, Sicherheit und maximale Stabilität.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'FiveM Scripts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiveM Scripts | Kostenlose Open Source Scripts',
    description: 'Kostenlose Open Source FiveM Scripts für deinen Server. Optimiert für Performance, Sicherheit und maximale Stabilität.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
