'use client';

import Form from "./form";

export default function Submit() {
  return (
    <div className='flex flex-col items-center justify-center w-full md:max-w-[720px] max-w-[320px] h-full mx-auto flex-1 px-4 text-black pt-48 pb-32'>
      <p className='text-7xl uppercase'>Submit Your Project</p>
      <p className='font-vista-sans py-2 pb-8'>Build with us, share about your project and Froggy Friend!</p>
      <Form />
    </div>
  )
}