import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonType = 'submit' | 'reset' | 'button' | undefined;
type ButtonProps = {
  title: string;
  type?: ButtonType;
  icon?: IconDefinition;
  url?: string;
  disabled?: boolean;
  onClick?: any;
}

export default function Button(props: ButtonProps) {
  const { title, type, url, icon, disabled, onClick } = props;

  return (
    <button type={type} className='text-white enabled:bg-blue enabled:hover:bg-dark-blue disabled:bg-light-gray enabled:transition enabled:ease-in-out enabled:delay-150 enabled:hover:translate-y-2 enabled:hover:scale-110 disabled:cursor-not-allowed rounded uppercase w-full h-full p-4' disabled={disabled} onClick={onClick}>
      <a href={url} target="_blank" className={`${icon ? '' : 'text-2xl sm:text-4xl'} tracking-widest`}>
        {icon ? <FontAwesomeIcon icon={icon} /> : title}
      </a>
    </button>
  )
}