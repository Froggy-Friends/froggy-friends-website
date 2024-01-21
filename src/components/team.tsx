import Card from './card';
import frogfather from '../images/frogfather.png';
import mango from '../images/mango.png';
import yummy from '../images/yummy.png';
import ollie from '../images/ollie.png';
import cole from '../images/cole.png';
import will from '../images/will.png';
import steezy from '../images/steezy.png';
import edo from '../images/edo.png';
import pax from '../images/pax.png';
import colson from '../images/colson.png';
import jasper from '../images/jasper.png';
import zeke from '../images/zeke.png';

export default function Team() {
    return (
        <div className='bg-light-red w-full p-8'>
            <div className='container mx-auto flex flex-col gap-20 items-center p-10'>
                <p className='text-5xl'>Froggy Friends Team</p>
                <div className='grid grid-rows-1 sm:grid-cols-2 md:grid-cols-5 gap-10'>
                    <Card src={frogfather} name='Fonzy' title='Co-Founder Developer' handle='0xFonzy' description='' />
                    <Card src={mango} name='Mango' title='Co-Founder Partnerships' handle='MayanMango' description='' />
                    <Card src={yummy} name='Yummy' title='Lead Artist' handle='Yummy_TheArtist' description='' />
                    <Card src={ollie} name='Ollie' title='Community Builder' handle='ollliieeeeee' description='' />
                    <Card src={cole} name='Cole' title='3D Artist' handle='3Dcole' description='' />
                    <Card src={will} name='Will' title='3D Artist' handle='will_cubed' description='' />

                    <Card src={steezy} name='Steezy' title='Designer' handle='_Steezyfresh_' description='' />
                    <Card src={edo} name='Edo' handle='TheItalianForg' title='Head Mod' description='' />
                    <Card src={pax} name='Pax' handle='realpaxoloto' title='Mod' description='' />
                    <Card src={colson} name='Colson' handle='heheColson' title='Collab Manager' description='' />
                </div>
            </div>
        </div>
    )
}