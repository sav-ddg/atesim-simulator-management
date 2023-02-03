import "../App.css";
import { Dialog } from "@mui/material";

const LogoutPopup = ({ open, close }) => {
  const question = "Yazılımı Kapatmak İstediğinize\n Emin Misiniz ?";
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="logoutContainer">
        <div className="question">
          <p>{question}</p>
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
              close();
            }}
          >
            HAYIR
          </button>
        </div>
      </div>
    </Dialog>
  );
};
export default LogoutPopup;
