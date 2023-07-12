import Image from "next/image";
import instagram from '../images/instagram.png';
import tiktok from '../images/tiktok.png';
import discord from '../images/discord.png';

export default function Socials() {
    return (
        <div className='bg-light-blue w-full'>
            <div className='container mx-auto flex flex-col gap-10 items-center p-10'>
                <p className='text-black text-5xl'>Froggy Socials</p>
                <div className='mx-auto grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3'>
                    <a href='https://discord.gg/froggyfriends' target='_blank'>
                        <Image src={discord} alt='Discord'/>
                    </a>
                    <a href='https://www.instagram.com/froggyfriendsglobal' target='_blank'>
                        <Image src={instagram} alt='Instagram'/>
                    </a>
                    <a href='https://www.tiktok.com/@froggyfriendsglobal' target='_blank'>
                        <Image src={tiktok} alt='Tiktok'/>
                    </a>
                </div>
            </div>
        </div>
    )
}