import Image from "next/image";
import rarities from '../images/rarities.png';


export default function Staking() {
    return (
        <div className='bg-light-purple w-full'>
            <div className='container mx-auto max-w-3xl flex flex-col gap-10 items-center p-10 text-black'>
                <p className='text-5xl'>Froggy $RIBBIT Staking</p>
                <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                    Froggy Friends offers a rarity-based staking system that allows holders to stake their frogs
                    and earn $RIBBIT tokens per day based on the rarity of their frog. 
                </p>
                <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                    The five rarity tiers include Common, Uncommon, Rare, Legendary, and Epic frogs. The tokens they earn
                    per day are: 20, 30, 40, 75 and 100 $RIBBIT respectively. 
                </p>
                <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                    We have enabled rarity filters on marketplaces like 
                    <a className='text-dark-blue underline pl-1 pr-1' href='https://opensea.io/collection/froggyfriendsnft' target='_blank'>Opensea</a> 
                    so you can search froggies by rarity tier.
                </p>
                <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                    $RIBBIT tokens can be spent on the Froggy Shop to purchase Froggy Traits and Froggy Companions.
                </p>
            </div>
            <div className='flex justify-center'>
                <Image src={rarities} alt='rarities'/>
            </div>
        </div>
    )
}