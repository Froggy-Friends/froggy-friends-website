import Image from "next/image";
import Link from "next/link";
import TadpolePfp from "../images/tadpole.png";

export default function Tadpole() {
  return (
    <div className='bg-light-green w-full p-8 xl:p-24'>
      <div className='container mx-auto max-w-6xl flex flex-col xl:flex-row gap-10 items-center sm:p-10 text-black'>
        <div className='flex flex-col gap-10'>
          <p className='text-5xl'>Tadpole</p>
          <p className='font-vista-sans text-md sm:text-2xl uppercase'>
            Tadpoles are the official ERC404 collection of Froggy Friends on Base.
            Froggy Friends is the first established NFT brand to launch an ERC404 collection.
          </p>
          <p className='font-vista-sans text-md sm:text-2xl uppercase' style={{ overflowWrap: 'anywhere' }}>
            Contract Address: 0x0afCAE1208Ac99aDdc6983A06735A199f190de09
          </p>
          <div className='flex flex-col md:flex-row gap-10'>
            <Image className='rounded-md' src={TadpolePfp} height={200} alt='Tadpole Logo' />
            <div className='flex flex-col gap-4'>
              <p className='text-2xl'>Official Links</p>
              <div className='flex flex-col'>
                <Link className='text-blue' href='https://magiceden.io/collections/base/0x0afcae1208ac99addc6983a06735a199f190de09' target="_blank">Magic Eden</Link>
                <Link className='text-blue' href='https://dexscreener.com/base/0x18cd951b53d295d04be47e7b5a2c3c4cf2b84ccc' target='_blank'>Dexscreener</Link>
                <Link className='text-blue' href='https://x.com/TadpoleNFTs' target='_blank'>Twitter</Link>
                <Link className='text-blue' href='mailto: fonzy@froggylabs.com'>Email</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}