"use client"
import { useState } from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import Button from './button';
import Drawer from './drawer';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-screen w-screen bg-[url('/summer.png')] bg-cover bg-bottom">
            <div id='header' className='container mx-auto max-w-5xl px-4 flex flex-row items-center justify-between'>
                <div className='sm:block hidden'><Button title='shop' color='blue' url='https://opensea.io/collection/froggy-friends-2'/></div>
                <div className='sm:block'><Image src={logo} alt='Froggy Friends' height={120}/></div>
                <div className='sm:block'><Button title='menu' color='blue' onClick={() => setIsOpen(true)}/></div>
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='flex flex-col justify-between gap-4'>
                    <a className='sm:text-5xl text-3xl' href='./'>Home</a>
                    <a className='sm:text-5xl text-3xl text-light-gray' href=''>Froggy Bridge</a>
                    <a className='sm:text-5xl text-3xl'>Team</a>
                    <a className='sm:block hidden sm:text-5xl text-3xl' href='https://opensea.io/collection/froggy-friends-2' target='_blank'>Shop</a>
                    <div className='sm:hidden'>
                        <button className='bg-light-green hover:bg-green transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 rounded uppercase w-full h-full p-2'>
                            <a className='text-4xl' href='https://opensea.io/collection/froggy-friends-2' target='_blank'>Buy on Opensea</a>
                        </button>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}