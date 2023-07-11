
import Image from 'next/image';
import logo from '../images/logo.png';

export default function Header() {
    return (
        <div id='header' className='container mx-auto px-4 flex flex-row justify-between'>
            <p>Shop</p>
            <Image src={logo} alt='Froggy Friends' height={120} width={120}/>
            <p>Menu</p>
        </div>
    ) 
}