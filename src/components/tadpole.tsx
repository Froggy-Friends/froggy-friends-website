import Image from "next/image";
import Link from "next/link";
import TadpolePfp from "../images/Tadpoles.png";

export default function Tadpole() {
    return (
        <div className='bg-light-green w-full p-8 xl:p-24'>
            <div className='container mx-auto max-w-6xl flex flex-col xl:flex-row gap-10 items-center sm:p-10 text-black'>
                <div className='flex flex-col gap-10'>
                    <p className='text-5xl'>Tadpole</p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        Tadpoles are the official ERC404 collection of Froggy Friends.
                        Froggy Friends is the first established NFT brand to launch an ERC404 collection.
                    </p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase' style={{ overflowWrap: 'anywhere' }}>
                        Contract Address: 0xecd48f326e70388d993694de59b4542ce8af7649
                    </p>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <Image className='rounded-md' src={TadpolePfp} height={200} alt='Tadpole Logo' />
                        <div className='flex flex-col gap-4'>
                            <p className='text-2xl'>Official Links</p>
                            <div className='flex flex-col'>
                                <Link className='text-blue' href='https://magiceden.io/collections/ethereum/0xecd48f326e70388d993694de59b4542ce8af7649' target="_blank">Magic Eden</Link>
                                <Link className='text-blue' href='https://t.me/tadpolefroggyfriends' target='_blank'>Telegram</Link>
                                <Link className='text-blue' href='https://www.dextools.io/app/en/ether/pair-explorer/0x8a8ede76cf42d31cce9b685c58c5dbfe0c8387a2?t=1707608662535' target='_blank'>Dextools</Link>
                                <Link className='text-blue' href='https://www.coingecko.com/en/coins/froggy-friends' target='_blank'>Coin Gecko</Link>
                                <Link className='text-blue' href='https://peapods.finance/app/wrap?pod=0x6A757D44a8B3cF5863a2D694040Fd1eF78616380' target='_blank'>Peapods Finance</Link>
                                <Link className='text-blue' href='https://twitter.com/TadpoleNFTs' target='_blank'>Twitter</Link>
                                <Link className='text-blue' href='mailto: fonzy@froggylabs.com'>Email</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}