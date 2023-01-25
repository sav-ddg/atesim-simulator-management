import "../App.css";
import { useNavigate } from "react-router-dom";

export default function ClosePopup(props) {
  const Navigate = useNavigate();
  const question = "Yazılımı Sonlandırmak İstediğinize\n Emin Misiniz ?";
  return (
    <div className="logoutContainer">
      <div className="question">
        <h1>{question}</h1>
      </div>
      <div className="logoutButtons">
        <button
          className="evetBtn"
          onClick={() => {
            window.close();
          }}
        >
          EVET
        </button>
        <button
          className="hayırBtn"
          onClick={() => {
            props.close();
          }}
        >
          HAYIR
        </button>
      </div>
    </div>
  );
}
