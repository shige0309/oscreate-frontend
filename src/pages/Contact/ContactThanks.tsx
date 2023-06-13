import { Button } from "components/Button"
import { Contact } from "components/Contact"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { FormContainer } from "components/Form/FormContainer"
import { MainVisual } from "components/MainVisual"
import { Sidebar } from "components/Sidebar/Front"
import { SubContent } from "components/SubContent"
import { SubPageTitle } from "components/SubPageTitle"

export const ContactThanksPage = () => {
  return (
    <>
      <Sidebar />
      <main>
          <MainVisual image={"contact/mv.jpg"}/>
          <Content>
              <div className="contact contact-thanks">
                  <SubPageTitle title={"CONTACT"} sub={"お問い合わせ"}/>
                  <p className="contact-text">お気軽にお問い合わせください。お問い合わせ内容の確認後、ご連絡させていただきます。<br />
                  3日経っても返事がない場合、申し訳ありませんが再度ご連絡ください。</p>
              </div>
              <SubContent>
                <FormContainer>
                  <h1 className="contact-thanks-heading">お問い合わせ頂きありがとうございます。</h1>
                  <p className="contact-thanks-text">内容確認の上、ご連絡を致しますので、今しばらくお待ちくださいませ。<br />
                      3日経っても返事がない場合、申し訳ありませんが再度ご連絡ください。</p>
                  <div className="contact-button">
                      <Button buttonType={"link"} text={"トップページに戻る"} link={""}/>
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
