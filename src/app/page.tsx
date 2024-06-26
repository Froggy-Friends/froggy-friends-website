import Companions from '@/components/companions';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Team from '@/components/team';
import Seasons from '@/components/seasons';
import Socials from '@/components/socials';
import Welcome from '@/components/welcome';
import { Analytics } from '@vercel/analytics/react';
import Giphy from '@/components/giphy';
import Tadpole from '@/components/tadpole';
import Hibernation from '@/components/hibernation';
import Banner from '@/components/banner';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <Header />
      <Banner />
      <Hibernation />
      <Giphy />
      <Tadpole />
      <Welcome />
      <Companions />
      <Seasons />
      <Socials />
      <Team />
      <Footer />
      <Analytics />
    </main>
  )
}
