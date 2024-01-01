import Companions from '@/components/companions';
import Team from '@/components/team';
import Seasons from '@/components/seasons';
import Socials from '@/components/socials';
import Welcome from '@/components/welcome';
import { Analytics } from '@vercel/analytics/react';
import Staking from '@/components/staking';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <Header />
      <Welcome />
      <Staking />
      <Companions />
      <Seasons />
      <Socials />
      <Team />
      <Analytics />
    </main>
  )
}
