import Footer from '@/components/footer';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';
import IP from './components/ip';

export default function Home() {
  return (
    <main className="bg-mint text-white flex min-h-screen flex-col items-center justify-between text-white">
      <Header />
      <IP />
      <Footer />
      <Analytics />
    </main>
  )
}
