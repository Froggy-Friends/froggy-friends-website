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
                : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
            >
            <section
                className={
                " w-screen max-w-lg right-0 absolute bg-dark-blue h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                <header className="flex flex-row justify-between p-4 font-bold text-5xl">
                    <p>Froggy Friends</p>
                    <Button title="Close" color="red" onClick={() => {setIsOpen(false)}}/>
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