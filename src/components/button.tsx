import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ButtonProps {
    title: string;
    icon?: IconDefinition;
    url?: string;
    onClick?: any;
}

export default function Button(props: ButtonProps) {
    const { title, url, icon, onClick } = props;


    return (
        <button className='text-white bg-blue hover:bg-dark-blue transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 rounded uppercase w-full h-full p-4' onClick={onClick}>
            <a href={url} target="_blank" className={`${icon ? '' : 'text-2xl sm:text-4xl'} tracking-widest`}>
                {icon ? <FontAwesomeIcon icon={icon}/> : title}
            </a>
        </button>
    )
}