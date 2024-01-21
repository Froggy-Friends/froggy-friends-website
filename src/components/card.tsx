'use client'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export interface CardProps {
    name: string;
    title: string;
    handle: string;
    description: string;
    src: string | StaticImport;
}

export default function Card({ name, title, description, handle, src }: CardProps) {
    const onClick = () => {
        window.open(`https://twitter.com/${handle}`, '_blank');
    }

    return (
        <div className='flex flex-col gap-4 bg-white rounded-lg border-4 border-black p-2'>
            <Image className='rounded-lg cursor-pointer hover:scale-90 hover:brightness-90' src={src} alt={handle} onClick={onClick} />
            <div className='text-black'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon className='text-dark-blue' icon={faTwitter} />
                    <p>&#64;{handle}</p>
                </div>
                <p>{title}</p>
                <p className='font-vista-sans'>{description}</p>
            </div>
        </div>
    )
}