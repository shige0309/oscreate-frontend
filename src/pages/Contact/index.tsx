import { MainVisual } from '../../components/MainVisual'
import { SubPageTitle } from '../../components/SubPageTitle'
import { SubContent } from '../../components/SubContent'
import { Content } from '../../components/Content'
import { Contact } from '../../components/Contact'
import './Contact.css';

export const ContactPage = () => {
  return (
    <main>
        <MainVisual image={"contact/mv.jpg"}/>
        <Content>
            <div className="contact">
                <SubPageTitle title={"CONTACT"} sub={"お問い合わせ"}/>
                <p className="contact-text">お気軽にお問い合わせください。お問い合わせ内容の確認後、ご連絡させていただきます。<br />
                3日経っても返事がない場合、申し訳ありませんが再度ご連絡ください。</p>
            </div>
            <SubContent>
              <dl className="contact">
                <dt>お名前</dt>
                <dd><input type="text" /></dd>
              </dl>
            </SubContent>
            <Contact />
        </Content>
    </main>
  )
}
