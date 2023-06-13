import { Link } from 'react-router-dom';
import './Contact.css';
import { FadeInComponent } from '../FadeInComponent';

export const Contact = () => {
  return (
    <FadeInComponent>
        <div className="contact">
            <Link to="/">
                <div className="contact-wrap">
                    <p className="contact-mail"><img src="icon/mail.svg" alt="" /></p>
                    <p className='contact-text area-400'>CONTACT US</p>
                </div>
            </Link>
        </div>
    </FadeInComponent>
  )
}
