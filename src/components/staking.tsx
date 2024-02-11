import Image from "next/image";
import Hibernation from "../images/hibernation.jpeg";

export default function Staking() {
    return (
        <div className='bg-light-blue w-full p-8 xl:p-24'>
            <div className='container mx-auto max-w-6xl flex flex-col xl:flex-row gap-10 items-center sm:p-10 text-black'>
                <div className='flex flex-col gap-10'>
                    <p className='text-5xl'>Introducing Hibernation</p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        Hibernation will be the first moment in history where you will be able to stake a ERC721 (Froggy Friend) to earn ERC404 ($TADPOLE).
                    </p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        On March 18, our two year anniversary, hibernation will launch and Froggy Friends holders will have their choice of hibernating for 30, 60, or 90 days.
                    </p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        The number of frogs you own and length of hibernation will determine your $TADPOLE staking rewards.
                    </p>
                    <p className='font-vista-sans text-3xl font-bold sm:text-3xl uppercase'>
                        Hibernation Boosts
                    </p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        Froggy Friends ecosystem NFTs will serve as hibernation boosts
                        including the Golden Lily Pad, One Year Anniversary Holder soulbound token, Froggy Minter soulbound token and the Tadpole soulbound token.
                    </p>
                    <div className='flex'>
                        <Image className="rounded-md" src={Hibernation} height={500} alt='rarities' />
                    </div>
                </div>
            </div>
        </div>
    )
}