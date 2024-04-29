import Button from "@/components/button";
import { saveProject } from "@/configs/api";
import { useMutation } from "@tanstack/react-query";
import { useForm } from 'react-hook-form';

export type IpProject = {
  firstName: string;
  lastName: string;
  email: string;
  name: string;
  description: string;
  goal: string;
  apply: boolean;
}

export default function Form() {
  const { register, handleSubmit, formState: { isValid } } = useForm<IpProject>({ mode: 'onChange' });
  const { mutate } = useMutation({ mutationFn: saveProject });

  const onSubmit = (ipProject: IpProject) => {
    const project = { ...ipProject };
    mutate(project);
  }

  return (
    <form className='flex flex-col gap-4 self-start w-full py-1' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col w-full gap-2 py-2'>
        <label className='text-2xl'>First Name</label>
        <input className='font-vista-sans rounded w-full h-full p-4' {...register('firstName', { required: true })} />
      </div>
      <div className='flex flex-col w-full gap-2 py-2'>
        <label className='text-2xl'>Last Name</label>
        <input className='font-vista-sans rounded w-full h-full p-4' {...register('lastName', { required: true })} />
      </div>
      <div className='flex flex-col w-full gap-2 py-2'>
        <label className='text-2xl'>Contact Email</label>
        <input className='font-vista-sans rounded w-full h-full p-4' {...register('email', { required: true })} />
      </div>
      <div className='flex flex-col w-full gap-2 py-2'>
        <label className='text-2xl'>Project Name</label>
        <input className='font-vista-sans rounded w-full h-full p-4' {...register('name', { required: true })} />
      </div>
      <div className='flex flex-col w-full gap-2 py-2'>
        <label className='text-2xl'>Project Description</label>
        <input className='font-vista-sans rounded w-full h-full p-4' {...register('description', { required: true })} />
      </div>
      <div className='flex flex-col w-full gap-2 py-2'>
        <label className='text-2xl'>Project Goal</label>
        <input className='font-vista-sans rounded w-full h-full p-4' {...register('goal', { required: true })} />
      </div>
      <p className='text-2xl pt-4'>Do you plan to make more than $500,000 per year?</p>
      <p className='font-vista-sans'>We love to support projects both big and small. Let us know your project size so we can help with the IP rights and marketing.</p>
      <fieldset className='flex flex-col gap-2 pb-8'>
        <div className='flex gap-2'>
          <input type="radio" value='YES' {...register('apply', { required: true })} />
          <label>Yes, I would like to apply for extended IP rights</label>
        </div>
        <div className='flex gap-2'>
          <input type="radio" value='NO' {...register('apply', { required: true })} />
          <label>No, just looking to share my project and expand Froggy Friends</label>
        </div>
      </fieldset>
      <Button title='Submit' type="submit" disabled={!isValid}></Button>
    </form>
  )
}