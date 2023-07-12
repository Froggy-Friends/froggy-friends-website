import Card from './card';
import frogfather from '../images/frogfather.png';
import mango from '../images/mango.png';
import yummy from '../images/yummy.png';
import ollie from '../images/ollie.png';
import cole from '../images/cole.png';
import will from '../images/will.png';

export default function Team() {
    return (
        <div className='bg-light-red w-full p-8'>
            <div className='container mx-auto flex flex-col gap-20 items-center p-10'>
                <p className='text-5xl'>Froggy Friends Teams</p>
                <div className='grid grid-rows-1 sm:grid-cols-2 md:grid-cols-6 gap-10'>
                    <Card src={frogfather} name='Fonzy' title='Co-Founder & Developer' description=''/>
                    <Card src={mango} name='Mango' title='Co-Founder & Buss. Dev' description=''/>
                    <Card src={yummy} name='Yummy' title='Lead Artist' description=''/>
                    <Card src={ollie} name='Ollie' title='Community Builder' description=''/>
                    <Card src={cole} name='Cole' title='3D Artist' description=''/>
                    <Card src={will} name='Will' title='3D Artist' description=''/>

                    <Card src={frogfather} name='Steezy' title='' description=''/>
                    <Card src={frogfather} name='Edo' title='' description=''/>
                    <Card src={frogfather} name='Pax' title='' description=''/>
                    <Card src={frogfather} name='Colson' title='' description=''/>
                    <Card src={frogfather} name='Jasper' title='' description=''/>
                    <Card src={frogfather} name='Zeke' title='' description=''/>
                </div>
            </div>
        </div>
    )
}