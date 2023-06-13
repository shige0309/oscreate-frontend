import './Title.css';

type TitleProps = {
    en: string;
    title: string | null;
}

export const Title = (props: TitleProps) => {
  return (
    <div className="homeTitle">
        <h2 className="area-400">{props.en}</h2>
        {props.title ? <p>{props.title}</p> : ""}
    </div>
  )
}
