import '../globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from 'next'
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Froggy Friends',
  description: 'IP Rights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
