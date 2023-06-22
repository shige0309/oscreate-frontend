import { Sidebar } from "components/Sidebar/Front";
import { MainVisual } from "components/MainVisual";
import { Content } from "components/Content";
import { SubPageTitle } from "components/SubPageTitle";
import { SubContent } from "components/SubContent";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";
import "./Blog.css";
import { useEffect, useState } from "react";
import { useBlog } from "hooks/useBlog";
import { getBlogType } from "Type";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { EditorState, convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import parse from "html-react-parser";

export const BlogPage = () => {
  const { getDetailBlog } = useBlog();
  const [ blog, setBlog ] = useState<getBlogType>();
  const id = useParams().id;
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    window.scrollTo(0,0);

    const getBlog = async () => {
      if(id) {
        const blog: AxiosResponse<getBlogType> = await getDetailBlog(id);

        const date = new Date(blog.data.updatedAt);
        const formatDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

        const rawContent = JSON.parse(blog.data.content as string);
        const contentState = convertFromRaw(rawContent);
        const editorState = EditorState.createWithContent(contentState);

        setBlog({...blog.data, "content": stateToHTML(editorState.getCurrentContent()), "updatedAt": formatDate});
      }
    }

    getBlog();
  }, []);
  return (
    <>
      <Sidebar />
      <main>
          <MainVisual image={"blog/mv.jpg"}/>
          <Content>
              <div className="blog">
                  <SubPageTitle title={"BLOG"} sub={"ブログ"}/>
                  <div className="blog-title-date">
                    <time dateTime={blog?.updatedAt} className="blog-date">{blog?.updatedAt}</time>
                    <h1 className="blog-title">{blog?.title}</h1>
                  </div>
              </div>
              <SubContent>
                <div className="blog-content">
                {blog
                ?<p className="blog-thumbnail"><img src={PUBLIC_FOLDER + blog.descriptionImage} alt="ポートフォリオサイトをリニューアルしました。" /></p>
                :<p className="blog-thumbnail"><img src="/blog/content-mv.jpg" alt="ポートフォリオサイトをリニューアルしました。" /></p>
                }
                {blog ? parse(blog?.content) : ""}
                </div>
              </SubContent>
              <Contact />
          </Content>
      </main>
      <Footer/>
    </>
  )
}
