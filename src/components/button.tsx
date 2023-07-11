export interface ButtonProps {
    title: string;
    color: string;
    circle?: boolean;
    url?: string;
    onClick?: any;
}

export default function Button(props: ButtonProps) {
    const { title, color, circle, url, onClick } = props;


    return (
        <button className={
            `bg-${color} hover:bg-dark-${color} transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 ${circle ? 'rounded-full' : 'rounded'} uppercase h-full p-2`
        }
            onClick={onClick}
        >
            <a href={url} target="_blank" className="text-4xl">{title}</a>
        </button>
    )
}