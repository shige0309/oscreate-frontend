import "./Alert.css";

type AlertProps = {
    changeAlertVisible: () => void;
};

export const Alert = ({changeAlertVisible}: AlertProps) => {
    return (
    <div className="c-alert__wrap c-success">
        <div className="c-alert">管理者を更新しました。<button className="c-alert__crosse" onClick={() => changeAlertVisible()}><span></span></button></div>
    </div>
  )
}
