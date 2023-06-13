import { Contact } from '../../components/Contact';
import { MainVisual } from '../../components/MainVisual';
import { Content } from '../../components/Content';
import { HomeCatch } from './Componant/HomeCatch';
import { HomeProfile } from './Componant/HomeProfile';
import { HomeWork } from './Componant/HomeWork';
import { HomeBlog } from './Componant/HomeBlog';
import { Sidebar } from '../../components/Sidebar';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
  return (
    <>
    <Sidebar />
    <main>
      <div id="top">
        <MainVisual image={"top-main.jpg"}/>
      </div>
      <Content>
        <HomeCatch />
        <div id="profile">
          <HomeProfile />
        </div>
        <div id="work">
          <div className="homeSection">
            <HomeWork />
          </div>
        </div>
        <div id="blog">
          <div className="homeSection">
            <HomeBlog />
          </div>
        </div>
        <Contact />
      </Content>
    </main>
    <Footer />
    </>
  );
}
