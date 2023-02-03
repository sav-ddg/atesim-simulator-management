import "../App.css";
import { Dialog } from "@mui/material";

const WarningPopup = ({ open, close, message }) => {
  return (
    <Dialog
      style={{ backdropFilter: "blur(3px)" }}
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="alertContainer">
        <h3>{message}</h3>
        <button
          onClick={() => {
            close();
          }}
        >
          Tamam
        </button>
      </div>
    </Dialog>
  );
};
export default WarningPopup;
