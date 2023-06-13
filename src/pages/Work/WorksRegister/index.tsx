import { Contact } from "components/Contact"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { MainVisual } from "components/MainVisual"
import { Sidebar } from "components/Sidebar"
import { SubContent } from "components/SubContent"
import { SubPageTitle } from "components/SubPageTitle"
import { Button } from 'components/Button'
import { FormContainer } from "components/Form/FormContainer"


export const WorksRegister = () => {
  return (
    <>
      <Sidebar />
      <main>
          <MainVisual image={"contact/mv.jpg"}/>
          <Content>
              <div className="contact">
                  <SubPageTitle title={"CONTACT"} sub={"お問い合わせ"}/>
                  <p className="contact-text">お気軽にお問い合わせください。お問い合わせ内容の確認後、ご連絡させていただきます。<br />
                  3日経っても返事がない場合、申し訳ありませんが再度ご連絡ください。</p>
              </div>
              <SubContent>
                <FormContainer>
                  <dl className="contact-def">
                    <dt>お名前</dt>
                    <dd><input type="text" /></dd>
                  </dl>
                  <dl className="contact-def">
                    <dt>メールアドレス</dt>
                    <dd><input type="email" /></dd>
                  </dl>
                  <dl className="contact-def">
                    <dt>内容</dt>
                    <dd><textarea name=""></textarea></dd>
                  </dl>
                  <div className="contact-button">
                    <Button buttonType={"button"} text={"トップへ戻る"} link={"/"}/>
                  </div>
                </FormContainer>
              </SubContent>
              <Contact />
          </Content>
      </main>
      <Footer />
    </>
  )
}
