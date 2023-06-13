import { Link } from 'react-router-dom';
import './Button.css';

type buttonProps = {
  buttonType: "button" | "link";
  text: string;
  link: string | null;
}

export const Button = (props: buttonProps) => {
  if (props.buttonType === 'button') {

    return <button type='submit' className="c-form-button">{props.text}</button>;
    
  } else {

    let link: string = "/";

    if(props.link) {
      link = props.link;
    }

    return <Link to={link} className="c-form-button">{props.text}</Link>
  }
}
