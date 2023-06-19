import { Contact } from "components/Contact";
import { Content } from "components/Content";
import { Footer } from "components/Footer";
import { MainVisual } from "components/MainVisual";
import { Sidebar } from "components/Sidebar/Front";
import { SubContent } from "components/SubContent";
import { SubPageTitle } from "components/SubPageTitle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Work.css";
import { useWork } from "hooks/useWork";
import { getWorkType } from "Type";
import { workType } from "Type";
import { AxiosResponse } from "axios";

export const WorkPage = () => {
  const { getDetailWork } = useWork();
  const id = useParams().id;
  const [ work, setWork ] = useState<getWorkType>();
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchWork = async () => {

      if(id) {
        const work: AxiosResponse<getWorkType> = await getDetailWork(id);
        setWork(work.data);
      }
    }

    fetchWork();

  }, [])
  return (
    <>
      <Sidebar />
      <main>
        <MainVisual image={"work/mv.jpg"}/>
        <Content>
          <div className="work">
            <SubPageTitle title={"WORK"} sub={work ? work.tag : ""}/>
            <h1 className="work-title">{work ? work.title : ""}</h1>
          </div>
          <SubContent>
            {work && <p className="work-detail"><img src={PUBLIC_FOLDER + work.descriptionImage} alt="" /></p>}
          </SubContent>
          <Contact />
        </Content>
      </main>
      <Footer />
    </>
  )
}
