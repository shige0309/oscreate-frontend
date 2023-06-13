import { Contact } from "../../components/Contact"
import { Content } from "../../components/Content"
import { MainVisual } from "../../components/MainVisual"
import { SubContent } from "../../components/SubContent"

export const Work = () => {
  return (
    <main>
      <MainVisual image={"work/mv.jpg"}/>
      <Content>
        <SubContent>
          <Contact />
        </SubContent>
      </Content>
    </main>
  )
}
