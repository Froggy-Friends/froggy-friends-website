import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from 'next'
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Froggy Friends',
  description: '4,444 friendly frogs spreading positivity across the pond',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-hwt-artz'>{children}</body>
    </html>
  )
}
