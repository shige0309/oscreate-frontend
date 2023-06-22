import { Link } from "react-router-dom";
import "./Card.css";
import { FadeInComponent } from "components/FadeInComponent";
import { getWorkType } from "Type";

export const Card = ({props}: {props: getWorkType}) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
      <div className="c-card">
        <FadeInComponent>
          <Link to={`/work/${props._id}`}>
              <figure>
                <p className="c-card-img"><img src={PUBLIC_FOLDER + props.thumbnail} alt={props.title}/></p>
                <figcaption>
                  <p className="c-card-tag"><span>{props.tag}</span></p>
                  <p className="c-card-name">{props.title}</p>
                </figcaption>
              </figure>
          </Link>
        </FadeInComponent>
      </div>
  )
}
