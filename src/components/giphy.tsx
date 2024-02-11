import Image from "next/image";
import GiphyImg from '../images/giphy.png';

export default function Giphy() {
    return (
        <div className='bg-light-brown w-full p-8 xl:p-24'>
            <div className='container mx-auto max-w-6xl flex flex-col xl:flex-row gap-10 items-center sm:p-10 text-black'>
                <div className='flex flex-col gap-10'>
                    <p className='text-5xl'>Giphy</p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        Froggy Friends is building a brand via gifs.
                        We have generated over 20 million views on Giphy, sharing the cute and adorable froggy IP across the globe.
                        Our business model is centered on gifs and using product placement via gifs to create IP licensing opportunities
                        for our holders. Growing our giphy is setting the foundation for this new way of doing business.
                    </p>
                    <a href='https://giphy.com/froggyfriendsofficial' target='_blank'>
                        Froggy Friends Gifs on <Image src={GiphyImg} alt='giphy logo' height={50} className='rounded' />
                    </a>
                </div>
            </div>
        </div>
    )
}