"use client"
import { useState } from 'react';
import Image from 'next/image';
import froggy from '../images/froggy.png';
import Button from './button';
import Drawer from './drawer';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute sticky top-0 flex flex-col gap-10 pt-2 w-screen backdrop-blur md:-mt-36 -mt-28">
        <div id='header' className='container mx-auto max-w-5xl px-4 flex flex-row items-center justify-between'>
          <div className='sm:block hidden'><Button title='shop' url='https://magiceden.io/collections/ethereum/0x7ad05c1b87e93be306a9eadf80ea60d7648f1b6f' /></div>
          <div className='sm:block'>
            <Link href='/'>
              <Image className='rounded-full md:w-32 w-24 p-4' src={froggy} alt='Froggy Friends' height={120} />
            </Link>
          </div>
          <div className='sm:block'><Button title='menu' onClick={() => setIsOpen(true)} /></div>
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className='flex flex-col justify-between gap-2'>
          <Link className='sm:text-4xl text-3xl hover:text-blue' href='/'>Home</Link>
          <Link className='sm:text-4xl text-3xl hover:text-blue' href='https://magiceden.io/collections/ethereum/0x7ad05c1b87e93be306a9eadf80ea60d7648f1b6f' target='_blank'>Shop</Link>
          <Link className='sm:text-4xl text-3xl hover:text-blue' href='/ip'>IP Policy</Link>
          <Link className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed' href=''>App</Link>
          <Link className='sm:text-4xl text-3xl text-light-gray cursor-not-allowed' href=''>Privacy Policy</Link>
        </div>
      </Drawer>
    </>
  )
}