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
                <p className='text-5xl'>Froggy Friends Teams</p>
                <div className='grid grid-rows-1 sm:grid-cols-2 md:grid-cols-6 gap-10'>
                    <Card src={frogfather} name='Fonzy' title='Co-Founder & Developer' url='https://twitter.com/0xFonzy' description=''/>
                    <Card src={mango} name='Mango' title='Co-Founder & Bus. Dev' url='https://twitter.com/MayanMango' description=''/>
                    <Card src={yummy} name='Yummy' title='Lead Artist' url='https://twitter.com/yumyumygoodness' description=''/>
                    <Card src={ollie} name='Ollie' title='Community Builder' url='https://twitter.com/ollliieeeeee' description=''/>
                    <Card src={cole} name='Cole' title='3D Artist' url='https://twitter.com/3Dcole' description=''/>
                    <Card src={will} name='Will' title='3D Artist' url='https://twitter.com/will_cubed' description=''/>

                    <Card src={steezy} name='Steezy' title='Designer' url='https://twitter.com/_Steezyfresh_' description=''/>
                    <Card src={edo} name='Edo' url='https://twitter.com/TheItalianForg' title='Head Mod' description=''/>
                    <Card src={pax} name='Pax' url='https://twitter.com/Paxoloto' title='Mod' description=''/>
                    <Card src={colson} name='Colson' url='https://twitter.com/heheColson' title='Collab Manager' description=''/>
                    <Card src={jasper} name='Jasper' url='https://twitter.com/jasper_cro' title='Content Creator' description=''/>
                    <Card src={zeke} name='Zeke' url='https://twitter.com/EzekielOden' title='Writer' description=''/>
                </div>
            </div>
        </div>
    )
}