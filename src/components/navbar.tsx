"use client"
import { useState } from 'react';
import Image from 'next/image';
import froggy from '../images/froggy.png';
import Button from './button';
import Drawer from './drawer';
import summer from '../images/summer.png';
import { usePathname } from 'next/navigation'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const getBackgroundImage = (path: string): StaticImport => {
        switch (path) {
            case '/':
                return summer;

            default:
                return summer;
        }
    }

    return (
        <div className="grid">
            <Image className="w-full col-[1] row-[1]" src={getBackgroundImage(`${pathname}`)} alt='Froggy Friends' objectFit='cover' objectPosition='center' style={{ zIndex: 0 }} />
            <div id='header' className='container mx-auto max-w-5xl px-4 flex flex-row items-center justify-between w-full col-[1] row-[1]' style={{ zIndex: 1 }}>
                <div className='sm:block hidden'><Button title='shop' url='https://opensea.io/collection/froggyfriendsnft' /></div>
                <div className='sm:block'><Image className='rounded-full md:w-32 w-24 p-4' src={froggy} alt='Froggy Friends' height={120} /></div>
                <div className='sm:block'><Button title='menu' onClick={() => setIsOpen(true)} /></div>
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='flex flex-col justify-between gap-2'>
                    <a className='sm:text-4xl text-3xl hover:text-blue' href='./'>Home</a>
                    <a className='sm:text-4xl text-3xl hover:text-blue' href='https://opensea.io/collection/froggyfriendsnft' target='_blank'>Shop</a>
                    <a className='sm:text-4xl text-3xl hover:text-blue' href='/branding'>Brand Bible</a>
                    <a className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed'>Froggy Bridge</a>
                    <a className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed'>App</a>
                    <a className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed'>IP Policy</a>
                    <a className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed'>Privacy Policy</a>
                </div>
            </Drawer>
        </div>
    )
}