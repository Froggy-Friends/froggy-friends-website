import Image from "next/image";
import forg from '../images/forg.png';
import kigu from '../images/kigu.png';
import valentines from '../images/valentines.png';

export default function Seasons() {
    return (
        <div className='bg-light-green w-full p-8 text-black'>
            <div className='container mx-auto max-w-5xl flex flex-col-reverse sm:flex-col gap-16 items-center sm:p-10'>
                <div className='grid grid-rows-1 sm:grid-cols-1 md:grid-cols-3 gap-10'>
                    <Image className='border-4 border-black rounded-lg' src={forg} alt='Forg'/>
                    <Image className='border-4 border-black rounded-lg' src={valentines} alt='Forg'/>
                    <Image className='border-4 border-black rounded-lg' src={kigu} alt='Forg'/>
                </div>
                <div className='flex flex-col gap-10'>
                    <p className='text-5xl'>Froggy Seasons</p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        Froggy Friends hosts seasons where new traits bundles are posted for sale on the Froggy Shop.
                        Holders can purchase seasonal traits using $RIBBIT tokens they earn by staking.
                    </p>
                    <p className='font-vista-sans text-md sm:text-2xl uppercase'>
                        Froggy Traits that are purchased during seasonal drops can be applied to frogs in the Froggy Studio.
                        You can always preview your trait upgrade in our very own Build-A-Frog factory.
                    </p>
                </div>
            </div>
        </div>
    )
}