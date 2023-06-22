import { FadeInComponent } from "components/FadeInComponent";
import { getBlogType } from "Type";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export const BlogCard = ({props}: {props: getBlogType}) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const date = new Date(props.updatedAt);
  const formattedDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

  return (
    <div className="c-blogCard">
      <FadeInComponent>
        <Link to={`/blog/${props._id}`}>
          <figure>
            <div className="c-blogCard-img">
              <p><img src={PUBLIC_FOLDER + props.thumbnail} alt="ポートフォリオサイトをリニューアルしました。" /></p>
            </div>
            <figcaption>
              <time dateTime={formattedDate}>{formattedDate}</time>
              <h2 className="c-blogCard-title">{props.title}</h2>
              <p className="c-blogCard-text">{props.content.replace(/\s+/g, '')}</p>
            </figcaption>
          </figure>
        </Link>
      </FadeInComponent>
    </div>
  )
}
