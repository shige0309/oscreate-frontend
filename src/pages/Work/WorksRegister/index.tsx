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
import { workType } from "Type"
import axios from "axios"
import { useWork } from "hooks/useWork"
import { Alert } from "components/Alert"

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

    if(tag === "") {
      setTagCheck("タグは必須です。");
    }

    if(title === "") {
      setTitleCheck("パスワードは必須です。");
    }

    if(tagCheck !== "" || titleCheck !== "") {
      return false;
    }

    const newWork: workType = {
      adminId: admin.id!,
      tag: tag,
      title: title,
      thumbnail: "",
      descriptionImage: ""
    }

    let addImagesWork: workType;

    if(thumbnail || descriptionImage) {
      const images = {
        thumbnail: thumbnail,
        descriptionImage: descriptionImage,
      }
  
      addImagesWork = await uploadImage(newWork, images);
    } else {
      addImagesWork = newWork;
    }

    try {
      await register(addImagesWork);
      setIsAlertVisible(true);
      setTag("");
      setTitle("");

      if(thumbnailInputRef.current) {
        thumbnailInputRef.current.value = '';
      }

      if(descriptionImageInputRef.current) {
        descriptionImageInputRef.current.value = '';
      }
      
    } catch (error) {
      alert(`エラーが発生しました。${error}`);
    }
  }

  const uploadImage = async (newWork: workType, images: Record<string, File | null>): Promise<workType> => {
    let updatedWork = { ...newWork };
    await Promise.all(Object.entries(images)
      .filter(([key, image]) => image !== null) 
      .map(async ([key, image]) => {
        const data = new FormData();
        const fileName = Date.now() + image!.name;
        data.append("name", fileName);
        data.append("file", image!);
        updatedWork[key as keyof workType] = fileName;

        try {
            //画像APIを叩く
            await axios.post("/upload", data);
        } catch (error) {
          alert(`画像のアップロードに失敗しました。${error}`);
        }
    }));

    return updatedWork;
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
