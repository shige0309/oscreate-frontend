import { Contact } from "components/Contact"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { MainVisual } from "components/MainVisual"
import { Sidebar } from "components/Sidebar"
import { SubContent } from "components/SubContent"
import { SubPageTitle } from "components/SubPageTitle"
import './Work.css'

export const WorkPage = () => {
  return (
    <>
      <Sidebar />
      <main>
        <MainVisual image={"work/mv.jpg"}/>
        <Content>
          <div className="work">
            <SubPageTitle title={"WORK"} sub={"WEB SITE"}/>
            <h1 className="work-title">キャトル株式会社様</h1>
          </div>
          <SubContent>
            <p><img src="/work/detail-img.jpg" alt="" /></p>
          </SubContent>
          <Contact />
        </Content>
      </main>
      <Footer />
    </>
  )
}
