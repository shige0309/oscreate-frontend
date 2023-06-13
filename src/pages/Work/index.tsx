import { Contact } from "../../components/Contact"
import { Content } from "../../components/Content"
import { MainVisual } from "../../components/MainVisual"
import { SubContent } from "../../components/SubContent"
import './Work.css'

export const Work = () => {
  return (
    <main>
      <MainVisual image={"work/mv.jpg"}/>
      <Content>
        <div className="work">
          <p className="work-title-en area-400">WORk</p>
          <p className="work-title-sub area-400">WEB SITE</p>
          <h1 className="work-title-title">キャトル株式会社様</h1>
        </div>
        <SubContent>
          <p><img src="/work/detail-img.jpg" alt="" /></p>
        </SubContent>
        <Contact />
      </Content>
    </main>
  )
}
