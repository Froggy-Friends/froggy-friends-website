import Footer from '@/components/footer';
import Header from '@/components/header';
import News from '@/components/news';
import Socials from '@/components/socials';
import Welcome from '@/components/welcome';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <Header/>
      <Welcome/>
      <Socials/>
      <News/>
      <Footer/>
    </main>
  )
}
