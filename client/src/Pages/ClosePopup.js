import "../App.css";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";

const ClosePopup = ({ open, close }) => {
  const Navigate = useNavigate();
  const question = "Yazılımı Sonlandırmak İstediğinize\n Emin Misiniz ?";
  return (
    <Dialog
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth="xl"
      open={open}
      onClose={close}
    >
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

export default ClosePopup;
