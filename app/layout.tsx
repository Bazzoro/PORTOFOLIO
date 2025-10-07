import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bass Website - Full Stack Developer",
  description: "Computer Science student at BINUS@Malang specializing in Full Stack Development for web and mobile applications.",
  keywords: "Bass Website, Full Stack Developer, Web Development, React, Next.js, Portfolio",
  authors: [{ name: "Baskoro Rizky Adiputra" }],
  creator: "Baskoro Rizky Adiputra",
  publisher: "Bass Website",
  robots: "index, follow",
  openGraph: {
    title: "Bass Website - Full Stack Developer",
    description: "Computer Science student at BINUS@Malang specializing in Full Stack Development for web and mobile applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bass Website - Full Stack Developer",
    description: "Computer Science student at BINUS@Malang specializing in Full Stack Development for web and mobile applications.",
  },
}

import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) { // Perbaikan: Tambahkan tipe untuk 'children'
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}