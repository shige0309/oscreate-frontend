import { Card } from '../../../../components/Card/WorkCard'
import { SectionTitle } from '../../../../components/SectionTitle';
import './HomeWork.css';

export const HomeWork = () => {
  return (
    <section>
      <SectionTitle en="WORK" title="直近の制作サイト"/>
      <div className="c-homeWork-card">
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </section>
  )
}
