import "../App.css";
import React, { useState } from "react";
import AlertPopup from "./AlertPopup";
import Dialog from "@mui/material/Dialog";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameAdmin = "admin";
  const passwordAdmin = "123";

  const userNameUser = "user";
  const passwordUser = "123";

  const [alertPopup, setAlertPopup] = React.useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = (str) => {
    setMessage(str);
    setAlertPopup(true);
  };
  const handleClose = () => {
    setAlertPopup(false);
  };

  const Navigate = useNavigate();

  return (
    <>
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
                //window.close();
                if (userName === userNameAdmin && password === passwordAdmin) {
                  Navigate("/login");
                } else if (
                  userName === userNameAdmin &&
                  password !== passwordAdmin
                ) {
                  handleOpen("Lütfen Şifrenizi Kontrol Ediniz !!");
                } else if (
                  userName !== userNameAdmin &&
                  password === passwordAdmin
                ) {
                  handleOpen("Lütfen Kullanıcı Adınızı \n Kontrol Ediniz !!");
                } else {
                  handleOpen(
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
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AlertPopup
          close={handleClose}
          alertPopup={setAlertPopup}
          message={message}
        />
      </Dialog>
    </>
  );
}
