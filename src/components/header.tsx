"use client"
import { useState } from 'react';
import Image from 'next/image';
import froggy from '../images/froggy.png';
import lineup from '../images/lineup.png';
import Button from './button';
import Drawer from './drawer';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-10 pt-2 h-screen w-screen bg-[url('/summer-mobile.png')] sm:bg-[url('/summer.png')] bg-cover bg-top">
            <div id='header' className='container mx-auto max-w-5xl px-4 flex flex-row items-center justify-between'>
                <div className='sm:block hidden'><Button title='shop' url='https://opensea.io/collection/froggy-friends-2'/></div>
                <div className='sm:block'><Image className='rounded-full md:w-32 w-24 p-4' src={froggy} alt='Froggy Friends' height={120}/></div>
                <div className='sm:block'><Button title='menu' onClick={() => setIsOpen(true)}/></div>
            </div>
            <p className='sm:text-7xl lg:text-8xl text-4xl text-center'>
                FROGGY FRIENDS
            </p>
            <div className='container mx-auto max-w-lg'>
                <p className='font-vista-sans text-2xl text-center p-4'>
                    4,444 friendly frogs spreading positivity and kindness originating on the Ethereum blockchain.
                </p>
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='flex flex-col justify-between gap-2'>
                    <a className='sm:text-4xl text-3xl hover:text-blue' href='./'>Home</a>
                    <a className='sm:text-4xl text-3xl hover:text-blue' href='https://opensea.io/collection/froggy-friends-2' target='_blank'>Shop</a>
                    <a className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed'>Froggy Bridge</a>
                    <a className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed'>App</a>
                    <a className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed'>IP Rights</a>
                    <a className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed'>Privacy Policy</a>
                </div>
            </Drawer>
        </div>
    )
}