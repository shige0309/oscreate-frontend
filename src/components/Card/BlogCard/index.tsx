import { FadeInComponent } from "components/FadeInComponent";
import "./BlogCard.css";

export const BlogCard = () => {
  return (
    <div className="c-blogCard">
      <FadeInComponent>
        <figure>
          <div className="c-blogCard-img">
            <p><img src="blog/1-1.jpg" alt="ポートフォリオサイトをリニューアルしました。" /></p>
          </div>
          <figcaption>
            <time dateTime="2023.08.01">2023.08.01</time>
            <h2 className="c-blogCard-title">ポートフォリオサイトをリニューアルしました。</h2>
            <p className="c-blogCard-text">ポートフォリオサイトをなんとかしないとと思っていましたが、なかなか時間が取れず、ずっと放置状態だったポートフォリオサイトをやっとリニューアルすることができました。
            <br />
            <br />
              今後はマーケティングや技術、デザインなどなど情報を発信していきたいですね。</p>
          </figcaption>
        </figure>
      </FadeInComponent>
    </div>
  )
}
