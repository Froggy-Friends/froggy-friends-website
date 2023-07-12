import Image from 'next/image';
import companions from '../images/companions.png';

export default function Companions() {
    return (
        <div className='bg-light-yellow w-full'>
            <div className='container mx-auto max-w-xl flex flex-col gap-10 items-center p-10 text-black'>
                <p className='text-5xl'>Froggy Companions</p>
                <p className='font-vista-sans'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='flex'>
                <Image src={companions} alt='Frogs'/>
            </div>
        </div>
    )
}