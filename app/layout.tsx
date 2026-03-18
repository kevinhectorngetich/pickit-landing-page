import type { Metadata } from 'next'
import { Caveat, Schoolbell } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const caveat = Caveat({ 
  subsets: ["latin"],
  variable: "--font-caveat",
});

const schoolbell = Schoolbell({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-schoolbell",
});

export const metadata: Metadata = {
  title: 'Pick It — Can\'t Decide? Pick It.',
  description: 'Three fun ways to make decisions — whether it\'s just you or a whole group. No more arguments, no more coin flips.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${schoolbell.variable} ${caveat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
