import "../App.css";
import React, { useState } from "react";
import LoginAlertPopup from "./LoginAlertPopup";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";
import ClosePopup from "./ClosePopup";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameAdmin = "admin";
  const passwordAdmin = "123";

  const userNameUser = "user";
  const passwordUser = "123";

  const [alertPopup, setAlertPopup] = React.useState(false);
  const [closePopup, setClosePopup] = React.useState(false);
  const [message, setMessage] = useState("");

  const handleOpenAlertPage = (str) => {
    setMessage(str);
    setAlertPopup(true);
  };
  const handleCloseAlertPage = () => {
    setAlertPopup(false);
  };
  const handleOpenClosePopup = (str) => {
    setClosePopup(true);
  };
  const handleCloseClosePopup = () => {
    setClosePopup(false);
  };

  const Navigate = useNavigate();

  return (
    <>
      <button
        className="closeBtnLogin"
        onClick={() => {
          setClosePopup(true);
        }}
      >
        <img src="Shutdown.png" />
      </button>
      <Dialog
        style={{ backdropFilter: "blur(3px)" }}
        open={closePopup}
        onClose={handleCloseClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ClosePopup close={handleCloseClosePopup} closePopup={setClosePopup} />
      </Dialog>

      <div className="loginContainer">
        <div className="login">
          <div className="userName">
            <input
              type="text"
              id="userName"
              placeholder="Kullanıcı Adı"
              required
              autoComplete="off"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="passwd">
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              id="password"
              placeholder="Şifre"
              required
            />
          </div>
          <div className="loginButton">
            <button
              onClick={() => {
                if (userName === userNameAdmin && password === passwordAdmin) {
                  Navigate("/login");
                } else if (
                  userName === userNameAdmin &&
                  password !== passwordAdmin
                ) {
                  handleOpenAlertPage("Lütfen Şifrenizi Kontrol Ediniz !!");
                } else if (
                  userName !== userNameAdmin &&
                  password === passwordAdmin
                ) {
                  handleOpenAlertPage(
                    "Lütfen Kullanıcı Adınızı \n Kontrol Ediniz !!"
                  );
                } else {
                  handleOpenAlertPage(
                    "Lütfen Kullanıcı Adınızı ve Şifrenizi \nKontrol Ediniz !!"
                  );
                }
              }}
              id="loginButton"
            >
              Giriş
            </button>
          </div>
        </div>
      </div>
      <Dialog
        style={{ backdropFilter: "blur(3px)" }}
        open={alertPopup}
        onClose={handleCloseAlertPage}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <LoginAlertPopup
          close={handleCloseAlertPage}
          alertPopup={setAlertPopup}
          message={message}
        />
      </Dialog>
    </>
  );
}
