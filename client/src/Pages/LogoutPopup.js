import "../App.css";
import { useNavigate } from "react-router-dom";

export default function LogoutPopup(props) {
  const Navigate = useNavigate();
  const question = "Oturumu Sonlandırmak İstediğinize\n Emin Misiniz ?";
  return (
    <div className="logoutContainer">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className="logoutButtons">
        <button
          className="evetBtn"
          onClick={() => {
            Navigate("/");
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
