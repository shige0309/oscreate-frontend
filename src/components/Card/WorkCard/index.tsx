import { Link } from 'react-router-dom';
import './Card.css';
import { FadeInComponent } from '../../FadeInComponent';

export const Card = () => {
  return (
      <div className="card">
        <FadeInComponent>
          <Link to={"/work/"}>
              <figure>
                <p className="card-img"><img src="work/1-1.jpg" alt='キャトル株式会社様'/></p>
                <figcaption>
                  <p className="card-tag"><span>WEB SITE</span></p>
                  <p className="card-name">キャトル株式会社様</p>
                </figcaption>
              </figure>
          </Link>
        </FadeInComponent>
      </div>
  )
}
