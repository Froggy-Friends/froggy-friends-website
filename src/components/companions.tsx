import Image from 'next/image';
import companions from '../images/companions.png';

export default function Companions() {
    return (
        <div className='bg-light-yellow w-full'>
            <div className='container mx-auto max-w-xl flex flex-col gap-10 items-center p-10 text-black'>
                <p className='text-5xl'>Froggy Companions</p>
                <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                    Froggy Friends pioneered the first omnimetadata that allows frogs to pair with a companion that provides
                    a staking boost.
                </p>
                <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                    Our genesis friend collection features five adorable companions to pair with your frog:
                    Rabbit, Red Panda, Bear, Cat, Unicorn and Golden Tiger.
                </p>
            </div>
            <div className='flex'>
                <Image src={companions} alt='Frogs'/>
            </div>
        </div>
    )
}