import Image from "next/image";
import network from '../images/network.png';

export default function Welcome() {
    return (
        <div className='w-full p-8 xl:p-24'>
            <div className='container mx-auto max-w-6xl flex flex-col xl:flex-row gap-10 items-center sm:p-10 text-black'>
                <div className='flex flex-col gap-10'>
                    <p className='text-5xl'>The Pond</p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        The pond is home to the Froggy Friends brand and is a community of passionate individuals who believe in the mission of
                        Froggy Friends to spread positivity and kindness. 
                        <br/><br/>
                        The pond consists of talented community members in art, engineering, fashion, business and many other industries. 
                    </p>
                </div>
                <Image src={network} alt='Froggy Network'/>
            </div>
        </div>
    )
}