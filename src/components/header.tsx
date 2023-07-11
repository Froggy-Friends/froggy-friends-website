"use client"

import Image from 'next/image';
import logo from '../images/logo.png';
import Button from './button';
import Drawer from './drawer';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div id='header' className='container mx-auto max-w-5xl px-4 flex flex-row items-center justify-between'>
                <Button title='shop' color='blue' url='https://shop.froggyfriendsnft.com'/>
                <Image src={logo} alt='Froggy Friends' height={120}/>
                <Button title='menu' color='blue' onClick={() => {setIsOpen(!isOpen)}}/>
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <p>Hello World</p>
            </Drawer>
        </>
    ) 
}