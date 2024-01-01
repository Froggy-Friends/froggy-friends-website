export default function Header() {

    return (
        <div className="flex flex-col gap-10 pt-2 h-screen w-screen">
            <p className='sm:text-7xl lg:text-8xl text-4xl text-center'>
                FROGGY FRIENDS
            </p>
            <div className='container mx-auto max-w-lg'>
                <p className='font-vista-sans text-2xl text-center p-4'>
                    4,444 friendly frogs spreading positivity and kindness, originating on the Ethereum blockchain.
                </p>
            </div>
        </div>
    )
}