import { Contact } from '../../components/Contact';
import { HomeBlog } from '../../components/Home/HomeBlog';
import { HomeCatch } from '../../components/Home/HomeCatch';
import { MainVisual } from '../../components/MainVisual';
import { HomeProfile } from '../../components/Home/HomeProfile';
import { HomeWork } from '../../components/Home/HomeWork';
import { Content } from '../../components/Content';

export const HomePage = () => {
  return (
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
  );
}
