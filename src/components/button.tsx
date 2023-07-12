export interface ButtonProps {
    title: string;
    url?: string;
    onClick?: any;
}

export default function Button(props: ButtonProps) {
    const { title, url, onClick } = props;


    return (
        <button className='bg-blue hover:bg-dark-blue transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 rounded uppercase w-full h-full p-4' onClick={onClick}>
            <a href={url} target="_blank" className="text-2xl sm:text-4xl tracking-widest">{title}</a>
        </button>
    )
}