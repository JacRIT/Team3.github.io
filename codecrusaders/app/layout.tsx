import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Nav from "./ui/nav/nav"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <h1>Career Roadmaps</h1>
          <Nav></Nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
