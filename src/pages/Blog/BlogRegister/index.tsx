import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { MainVisual } from "components/MainVisual"
import { Sidebar } from "components/Sidebar/Admin"
import { SubContent } from "components/SubContent"
import { SubPageTitle } from "components/SubPageTitle"
import { Button } from "components/Button"
import { FormContainer } from "components/Form/FormContainer"
import "./WorksRegister.css"
import { Alert } from "components/Alert"
import { useCallback, useRef, useState } from "react"
import { TextEditor } from "components/TextEditor/TextEditor"

export const BlogRegister = () => {
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [tagCheck, setTagCheck] = useState<string>("");
  const [titleCheck, setTitleCheck] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null >(null);
  const [descriptionImage, setDescriptionImage] = useState<File | null>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const descriptionImageInputRef = useRef<HTMLInputElement>(null);

  const checkTitleInput = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setTitle(e.target.value);
    setTitleCheck("");
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {

  }
  
  const operationFile = (e: React.ChangeEvent<HTMLInputElement>, target: "Thumbnail" | "DescriptionImage") => {
    if(e.target.files) {
      switch (target) {
        case "Thumbnail":
            setThumbnail(e.target.files[0]);
          break;
        case "DescriptionImage":
            setDescriptionImage(e.target.files[0]);
          break;
        default:
          break;
      }
    }
  }

  const changeAlertVisible = useCallback(() => {
    setIsAlertVisible((prevState) => !prevState);
  }, []);

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
                {isAlertVisible &&
                  <Alert changeAlertVisible={changeAlertVisible}/>
                }
                <FormContainer>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <dl className="form-def">
                      <dt>タイトル</dt>
                      <dd><input type="text" onChange={(e) => checkTitleInput(e)} value={title}/></dd>
                    </dl>
                    <dl className="form-def">
                      <dt>サムネイル</dt>
                      <dd><input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => operationFile(e, "Thumbnail")} ref={thumbnailInputRef}/></dd>
                    </dl>
                    <dl className="form-def">
                      <dt>詳細画像</dt>
                      <dd><input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => operationFile(e, "DescriptionImage")} ref={descriptionImageInputRef}/></dd>
                    </dl>
                    <dl className="form-def">
                      <dt>内容</dt>
                        <dd>
                          <TextEditor />
                        </dd>
                    </dl>
                    <div className="contact-button">
                      <Button buttonType={"button"} text={"登録する"} link={""}/>
                    </div>
                  </form>
                </FormContainer>
              </SubContent>
          </Content>
      </main>
      <Footer />
    </>
  )
}
