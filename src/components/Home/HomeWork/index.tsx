import { Card } from '../../Card/WorkCard'
import { Title } from '../../Title';
import './HomeWork.css';

export const HomeWork = () => {
  return (
    <section>
        <div className="homeSection">
            <Title en="WORK" title="直近の制作サイト"/>
            <div className="homeWork-card">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
  )
}
