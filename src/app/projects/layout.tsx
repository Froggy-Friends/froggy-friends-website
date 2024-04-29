import '../globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from 'next'
import Provider from './provider';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Froggy Friends',
  description: 'Submit Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-hwt-artz'>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
