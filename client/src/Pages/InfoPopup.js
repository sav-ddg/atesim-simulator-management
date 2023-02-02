import { Dialog } from "@mui/material";
import "../App.css";

const InfoPopup = ({ open, close, str }) => {
  var temp = str.slice(0, str.length - 5);
  const warning = temp + "Komutu Gönderildi";
  return (
    <>
      <Dialog
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        open={open}
        onClose={close}
      >
        <div className="warningContainer">
          <div className="question">
            <img alt="" src="Success-104.png" />
            <p>{warning}</p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default InfoPopup;
