import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactQueryProvider } from './client-providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bookshelf',
  description:
    'Easily organize, track, and explore your personal book collections with Bookshelf.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    /* suppressHydrationWarning is what's recommended by Next.js until they release a proper solution to their theme provider */
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen w-full justify-center antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <div className='flex h-screen w-full justify-center'>
              {children}
            </div>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
