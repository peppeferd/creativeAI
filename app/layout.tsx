'use client'

import { Poppins as Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { RecoilRoot } from 'recoil'
import Nav from '@/components/Nav'
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <RecoilRoot>
        <UserProvider>
          <body className={inter.className}>
            <Nav />
            {children}
          </body>
        </UserProvider>
      </RecoilRoot>
    </html>
  )
}
