'use client';

import Button from "@/components/button";
import { TextInput } from "@/components/input";

export default function Submit() {

  const submitForm = () => {

  }

  return (
    <div className='flex flex-col items-center justify-center w-full md:max-w-[720px] max-w-[320px] h-full mx-auto flex-1 px-4 text-black pt-48 pb-32'>
      <p className='text-7xl uppercase'>Submit Your Project</p>
      <p className='font-vista-sans py-2 pb-8'>Build with us, share about your project and Froggy Friend!</p>
      <form className='flex flex-col gap-4 self-start w-full py-1' onSubmit={submitForm}>
        <div className='flex flex-col w-full gap-2 py-2'>
          <label className='text-2xl'>First Name</label>
          <TextInput />
        </div>
        <div className='flex flex-col w-full gap-2 py-2'>
          <label className='text-2xl'>Last Name</label>
          <TextInput />
        </div>
        <div className='flex flex-col w-full gap-2 py-2'>
          <label className='text-2xl'>Contact Email</label>
          <TextInput />
        </div>
        <div className='flex flex-col w-full gap-2 py-2'>
          <label className='text-2xl'>Project Name</label>
          <TextInput />
        </div>
        <div className='flex flex-col w-full gap-2 py-2'>
          <label className='text-2xl'>Project Description</label>
          <TextInput />
        </div>
        <div className='flex flex-col w-full gap-2 py-2'>
          <label className='text-2xl'>Project Goal</label>
          <TextInput />
        </div>
        <p className='text-2xl pt-4'>Do you plan to make more than $500,000 per year?</p>
        <p className='font-vista-sans'>We love to support projects both big and small. Let us know your project size so we can help with the IP rights and marketing.</p>
        <div className='flex flex-col gap-2 pb-8'>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <p>Yes, I would like to apply for extended IP rights</p>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <p>No, just looking to share my project and expand Froggy Friends</p>
          </div>
        </div>
        <Button title='Submit'></Button>
      </form>
    </div>
  )
}