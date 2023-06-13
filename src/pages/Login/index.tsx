import { FormContainer } from '../../components/Form/FormContainer';
import { MainVisual } from '../../components/MainVisual';
import { SubContent } from '../../components/SubContent';
import { SubPageTitle } from '../../components/SubPageTitle';
import './Login.css';
import { Button } from '../../components/Button'
import { Footer } from './Componants/Footer';

export const Login = () => {
  return (
    <>
      <main>
        <div className="login">
          <MainVisual image={"top-main.jpg"}/>
          <div className="login-wrap">
            <p className="login-logo"><img src="/logo-white.svg" alt="ロゴ" /></p>
            <div className="login-title">
              <SubPageTitle title={"LOGIN"} sub={"管理者ログイン"}/>
            </div>
            <SubContent>
              <FormContainer>
                <dl className="form-def">
                  <dt>ユーザー名</dt>
                  <dd><input type="text" /></dd>
                </dl>
                <dl className="form-def">
                  <dt>パスワード</dt>
                  <dd><input type="email" /></dd>
                </dl>
                <div className="contact-button">
                  <Button buttonType={"button"} text={"ログイン"} link={"/"}/>
                </div>
              </FormContainer>
            </SubContent>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
