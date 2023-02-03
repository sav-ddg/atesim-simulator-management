import "../App.css";
import React, { useState, useEffect } from "react";
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
  const handleCloseClosePopup = () => {
    setClosePopup(false);
  };

  const handleForm = () => {
    if (userName === userNameAdmin && password === passwordAdmin) {
      Navigate("/login");
    } else if (userName === userNameAdmin && password !== passwordAdmin) {
      handleOpenAlertPage("Lütfen Şifrenizi Kontrol Ediniz !!");
    } else if (userName !== userNameAdmin && password === passwordAdmin) {
      handleOpenAlertPage("Lütfen Kullanıcı Adınızı \n Kontrol Ediniz !!");
    } else {
      handleOpenAlertPage(
        "Lütfen Kullanıcı Adınızı ve Şifrenizi \nKontrol Ediniz !!"
      );
    }
    if (userName === userNameUser && password === passwordAdmin) {
      Navigate("/login");
    } else if (userName === userNameUser && password !== passwordAdmin) {
      handleOpenAlertPage("Lütfen Şifrenizi Kontrol Ediniz !!");
    } else if (userName !== userNameUser && password === passwordUser) {
      handleOpenAlertPage("Lütfen Kullanıcı Adınızı \n Kontrol Ediniz !!");
    } else {
      handleOpenAlertPage(
        "Lütfen Kullanıcı Adınızı ve Şifrenizi \nKontrol Ediniz !!"
      );
    }
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("You pressed Enter");
      handleForm();
    }
  });

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

      <ClosePopup
        open={closePopup}
        close={() => setClosePopup(false)}
        message={message}
      />

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
              type="submit"
              onClick={() => {
                handleForm();
              }}
              id="loginButton"
            >
              Giriş
            </button>
          </div>
        </div>
      </div>

      <LoginAlertPopup
        open={alertPopup}
        close={() => setAlertPopup(false)}
        message={message}
      />
    </>
  );
}
