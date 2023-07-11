import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

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
                ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                : " transition-all delay-500 opacity-0 translate-x-full")
            }
            >
            <section
                className={
                " w-screen max-w-lg right-0 absolute bg-dark-blue h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform p-4" +
                (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-md pb-10 flex flex-col overflow-y-scroll h-full">
                <header className="flex flex-row justify-between items-center w-full font-bold text-6xl">
                    <p>Froggy Friends</p>
                    <FontAwesomeIcon icon={faClose} size="sm" className='bg-green rounded p-2 h-8'/>
                </header>
                {children}
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                setIsOpen(false);
                }}
            ></section>
        </main>
    )
}