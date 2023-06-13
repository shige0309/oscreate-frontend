import { MainVisual } from '../../components/MainVisual'
import { Content } from '../../components/Content'
import { SubContent } from '../../components/SubContent'
import { Contact } from '../../components/Contact'
import { SubPageTitle } from '../../components/SubPageTitle'
import './Blog.css';

export const BlogPage = () => {
  return (
    <main>
        <MainVisual image={"blog/mv.jpg"}/>
        <Content>
            <div className="blog">
                <SubPageTitle title={"BLOG"} sub={"ブログ"}/>
                <div className="blog-title-date">
                  <time dateTime="2023.08.01" className="blog-date">2023.08.01</time>
                  <h1 className="blog-title">ポートフォリオサイトをリニューアルしました。</h1>
                </div>
            </div>
            <SubContent>
              <div className="blog-content">
              <p><img src="/blog/content-mv.jpg" alt="ポートフォリオサイトをリニューアルしました。" /></p>
              ポートフォリオサイトをなんとかしないとと思っていましたが、なかなか時間が取れず、ずっと放置状態だったポートフォリオサイトをやっとリニューアルすることができました。今後はマーケティングや技術、デザインなどなど情報を発信していきたいですね。
              </div>
            </SubContent>
            <Contact />
        </Content>
    </main>
  )
}
