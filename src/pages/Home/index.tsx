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
      <HomeMain />
      <div className="home-content">
        <div className="home-content-wrap">
            <HomeCatch />
            <HomeProfile />
            <HomeWork />
            <HomeBlog />
        </div>
      </div>
    </main>
    </>
  );
}
