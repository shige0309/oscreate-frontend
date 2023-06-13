import { Contact } from '../../components/Contact';
import { HomeBlog } from '../../components/Home/HomeBlog';
import { HomeCatch } from '../../components/Home/HomeCatch';
import { HomeMain } from '../../components/Home/HomeMain';
import { HomeProfile } from '../../components/Home/HomeProfile';
import { HomeWork } from '../../components/Home/HomeWork';
import './Home.css'

export const Home = () => {
  return (
    <>
    <main>
      <div id="top">
        <HomeMain />
      </div>
      <div className="home-content">
        <div className="home-content-wrap">
            <HomeCatch />
            <div id="profile">
              <HomeProfile />
            </div>
            <div id="work">
              <HomeWork />
            </div>
            <div id="blog">
              <HomeBlog />
            </div>
            <Contact />
        </div>
      </div>
    </main>
    </>
  );
}
