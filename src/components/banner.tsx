import Button from "./button";

export default function Banner() {
  return (
    <div className="flex flex-col gap-10 pt-2 h-screen w-screen bg-[url('/summer-mobile.png')] sm:bg-[url('/summer.png')] bg-cover bg-top md:pt-48 pt-32">
      <p className='sm:text-7xl lg:text-8xl text-4xl text-center'>
        Froggy Friends
      </p>
      <div className='container mx-auto max-w-lg'>
        <p className='font-vista-sans text-2xl text-center p-4'>
          4,444 friendly frogs spreading positivity and kindness, originating on the Ethereum blockchain.
        </p>
        <div className='sm:block'>
          <Button title='HIBERNATION IS LIVE' url='https://hibernation.froggyfriends.io' />
        </div>
      </div>
    </div>
  )
}