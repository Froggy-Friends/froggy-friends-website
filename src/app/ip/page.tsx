import Footer from '@/components/footer';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';
import IP from './ip';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <Header />
      <IP />
      <Footer />
      <Analytics />
    </main>
  )
}
