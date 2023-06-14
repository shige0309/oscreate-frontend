import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { MainVisual } from "components/MainVisual"
import { Sidebar } from "components/Sidebar/Admin"
import { SubContent } from "components/SubContent"
import { SubPageTitle } from "components/SubPageTitle"
import { Button } from "components/Button"
import { FormContainer } from "components/Form/FormContainer"
import "./WorksRegister.css"

export const BlogRegister = () => {
  return (
    <>
      <Sidebar />
      <main>
          <MainVisual image={"contact/mv.jpg"}/>
          <Content>
              <div className="c-blog-register">
                  <SubPageTitle title={"BLOG登録"} sub={""}/>
              </div>
              <SubContent>
                <FormContainer>
                  <dl className="contact-def">
                    <dt>タイトル</dt>
                    <dd><input type="text" /></dd>
                  </dl>
                  <dl className="contact-def">
                    <dt>サムネイル</dt>
                    <dd><input type="file" /></dd>
                  </dl>
                  <dl className="contact-def">
                    <dt>詳細画像</dt>
                    <dd><input type="file" /></dd>
                  </dl>
                  <dl className="contact-def">
                    <dt>内容</dt>
                    <dd><textarea name="description" id=""></textarea></dd>
                  </dl>
                  <div className="contact-button">
                    <Button buttonType={"button"} text={"登録する"} link={""}/>
                  </div>
                </FormContainer>
              </SubContent>
          </Content>
      </main>
      <Footer />
    </>
  )
}
