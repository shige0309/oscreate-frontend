import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { MainVisual } from "components/MainVisual"
import { Sidebar } from "components/Sidebar/Admin"
import { SubContent } from "components/SubContent"
import { SubPageTitle } from "components/SubPageTitle"
import { Button } from "components/Button"
import { FormContainer } from "components/Form/FormContainer"
import "./AdminUpdate.css"

export const AdminUpdate = () => {
  return (
    <>
      <Sidebar />
      <main>
          <MainVisual image={"contact/mv.jpg"}/>
          <Content>
              <div className="c-admin-register">
                  <SubPageTitle title={"管理者更新"} sub={""}/>
              </div>
              <SubContent>
                <FormContainer>
                  <dl className="form-def">
                    <dt>名前</dt>
                    <dd><input type="text" /></dd>
                  </dl>
                  <dl className="form-def">
                    <dt>パスワード</dt>
                    <dd><input type="email" /></dd>
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
