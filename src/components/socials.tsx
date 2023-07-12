import Image from "next/image";
import instagram from '../images/instagram.png';
import tiktok from '../images/tiktok.png';

export default function Socials() {
    return (
        <div className='bg-light-blue w-full'>
            <div className='container mx-auto flex flex-col sm:flex-row gap-10 items-center p-10'>
                <a href='https://www.instagram.com/froggyfriendsglobal' target='_blank'>
                    <Image src={instagram} alt='Instagram'/>
                </a>
                <a href='https://www.tiktok.com/@froggyfriendsglobal' target='_blank'>
                    <Image src={tiktok} alt='Tiktok'/>
                </a>
            </div>
        </div>
    )
}