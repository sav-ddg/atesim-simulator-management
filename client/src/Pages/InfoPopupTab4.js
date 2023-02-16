import { Dialog } from "@mui/material";
import "../App.css";

const InfoPopupTab4 = ({ open, close, selectedItems, str }) => {
  const warning =
    selectedItems.length === 0
      ? "Lütfen Oda Seçiniz !! "
      : selectedItems + "\nOdalarına " + str + " Komutu Gönderildi.";

  return selectedItems.length === 0 ? (
    <>
      <Dialog
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        open={open}
        onClose={close}
      >
        <div className="infoContainer">
          <div className="confirmation">
            <img alt="" src="Error-104.png" />
            <p>{warning}</p>
          </div>
        </div>
      </Dialog>
    </>
  ) : (
    <>
      <Dialog
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        open={open}
        onClose={close}
      >
        <div className="infoContainer">
          <div className="confirmation">
            <img alt="" src="Success-104.png" />
            <p>{warning}</p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default InfoPopupTab4;
