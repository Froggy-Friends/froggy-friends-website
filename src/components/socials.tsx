import Image from "next/image";
import instagram from '../images/instagram.png';
import tiktok from '../images/tiktok.png';
import discord from '../images/discord.png';

export default function Socials() {
  return (
    <div className='bg-light-blue w-full'>
      <div className='container mx-auto flex flex-col gap-10 items-center p-10'>
        <p className='text-black text-5xl'>Froggy Socials</p>
        <div className='mx-auto grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2'>
          <a href='https://www.instagram.com/froggyfriends.co' target='_blank'>
            <Image src={instagram} height={500} alt='Instagram' />
          </a>
          <a href='https://www.tiktok.com/@froggyfriendsco' target='_blank'>
            <Image src={tiktok} height={500} alt='Tiktok' />
          </a>
        </div>
      </div>
    </div>
  )
}