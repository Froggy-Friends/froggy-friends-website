import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export interface CardProps {
    name: string;
    title: string;
    description: string;
    src: string | StaticImport;
}

export default function Card({name, title, description, src}: CardProps) {
    return (
        <div className='flex flex-col gap-4 bg-white rounded-lg border-2 border-black p-2'>
            <div>
                <Image className='rounded-lg' src={src} alt=''/>
            </div>
            <div className='text-black'>
                <div className='flex gap-2 items-center'>
                    <a href='https://twitter.com/0xFonzy' target="_blank">
                        <FontAwesomeIcon className='text-dark-blue' target="_blank" icon={faTwitter}/>
                    </a>
                    <p>{name}</p>
                </div>
                <p>{title}</p>
                <p className='font-vista-sans'>{description}</p>
            </div>
        </div>
    )
}