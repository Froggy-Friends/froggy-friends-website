import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import astro from '../images/astro.png';

export interface DrawerProps {
    children: any;
    isOpen: boolean;
    setIsOpen: any;
}

export default function Drawer({children, isOpen, setIsOpen}: DrawerProps) {
    return (
        <main
            className={
                "fixed overflow-hidden z-10 inset-0" +
                (isOpen
                ? " transition-opacity opacity-100 duration-500 translate-x-0 "
                : " transition-all delay-500 opacity-0 translate-x-full")
            }
            >
            <section
                className={
                " w-screen max-w-lg right-0 absolute bg-light-green h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform pt-8 pl-8 pr-8" +
                (isOpen ? " translate-x-0" : " translate-x-full ")
                }
            >
                <article className="relative text-black w-full h-full flex flex-col overflow-y-scroll h-full">
                    <header className="flex flex-row justify-between items-center w-full font-bold sm:text-6xl text-4xl pb-10">
                        <p>Froggy Friends</p>
                        <FontAwesomeIcon 
                            className='bg-blue hover:bg-dark-blue text-white rounded p-2 mr-1 mb-1 sm:h-8 h-6 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 cursor-pointer'
                            icon={faClose} 
                            size="sm"
                            onClick={() => setIsOpen(false)}
                        />
                    </header>
                    {children}
                    <Image className='absolute bottom-0' src={astro} alt='Astro Froggy'/>
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer"
                onClick={() => {
                setIsOpen(false);
                }}
            ></section>
        </main>
    )
}