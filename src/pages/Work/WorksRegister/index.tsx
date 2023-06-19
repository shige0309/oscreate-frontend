import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { MainVisual } from "components/MainVisual"
import { Sidebar } from "components/Sidebar/Admin"
import { SubContent } from "components/SubContent"
import { SubPageTitle } from "components/SubPageTitle"
import { Button } from "components/Button"
import { FormContainer } from "components/Form/FormContainer"
import "./WorksRegister.css"
import { useCallback, useRef, useState } from "react"
import { useAppSelector } from "stores/hooks"
import { newImageType, uploadImageData, workType } from "Type"
import axios from "axios"
import { useWork } from "hooks/useWork"
import { Alert } from "components/Alert"
import {useUploadImage} from "hooks/useUploadImage";

export const WorksRegister = () => {
  const {admin} = useAppSelector((state) => state);
  const [tag, setTag] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [tagCheck, setTagCheck] = useState<string>("");
  const [titleCheck, setTitleCheck] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null >(null);
  const [descriptionImage, setDescriptionImage] = useState<File | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const descriptionImageInputRef = useRef<HTMLInputElement>(null);
  const {register} = useWork();
  const { prepareAndUploadImages } = useUploadImage();

  const checkTagInput = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setTag(e.target.value);
    setTagCheck("");
  }

  const checkTitleInput = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setTitle(e.target.value);
    setTitleCheck("");
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isTagEmpty = false;
    let isTitleEmpty = false;

    if(tag === "") {
      setTagCheck("タグは必須です。");
      isTagEmpty = true;
    }

    if(title === "") {
      setTitleCheck("パスワードは必須です。");
      isTitleEmpty = true;
    }

    if(isTagEmpty || isTitleEmpty) {
      return false;
    }

    const newWork: workType = {
      adminId: admin.id!,
      tag: tag,
      title: title,
      thumbnail: "",
      descriptionImage: "",
    }

    let workData: workType = newWork;

    if(thumbnail || descriptionImage) {
      workData = prepareAndUploadImages(thumbnail, descriptionImage, workData, newWork) as workType;
    }

    try {
      await register(workData);
      
      if(thumbnailInputRef.current) {
        thumbnailInputRef.current.value = '';
      }

      if(descriptionImageInputRef.current) {
        descriptionImageInputRef.current.value = '';
      }

      setIsAlertVisible(true);
      setTag("");
      setTitle("");
      setTagCheck("");
      setTitleCheck("");
    } catch (error) {
      alert(`エラーが発生しました。${error}`);
    }
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
              <div className="c-works-register">
                  <SubPageTitle title={"WORKS登録"} sub={""}/>
              </div>
              <SubContent>
                {isAlertVisible &&
                  <Alert changeAlertVisible={changeAlertVisible}/>
                }
                <FormContainer>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <dl className="form-def">
                      <dt>タグ</dt>
                      <dd>
                        <input type="text" onChange={(e) => checkTagInput(e)} value={tag}/>
                        {tagCheck && <p className="form-attention">{tagCheck}</p>}
                      </dd>
                    </dl>
                    <dl className="form-def">
                      <dt>タイトル</dt>
                      <dd>
                        <input type="text" onChange={(e) => checkTitleInput(e)} value={title}/>
                        {titleCheck && <p className="form-attention">{titleCheck}</p>}
                      </dd>
                    </dl>
                    <dl className="form-def">
                      <dt>サムネイル</dt>
                      <dd><input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => operationFile(e, "Thumbnail")} ref={thumbnailInputRef}/></dd>
                    </dl>
                    <dl className="form-def">
                      <dt>詳細画像</dt>
                      <dd><input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => operationFile(e, "DescriptionImage")} ref={descriptionImageInputRef}/></dd>
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
