import "../App.css";
import { useState } from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameAdmin = "admin";
  const passwordAdmin = "123";

  const userNameUser = "user";
  const passwordUser = "123";

  const Navigate = useNavigate();

  return (
    <div className="loginContainer">
      <div className="login">
        <div className="userName">
          <input
            type="text"
            id="userName"
            placeholder="Kullanıcı Adı"
            required
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
              window.close();
              if (userName === userNameAdmin && password === passwordAdmin) {
                Navigate("/login");
              } else if (
                userName === userNameAdmin &&
                password !== passwordAdmin
              ) {
                alert("Lütfen Şifrenizi Kontrol Ediniz!!!");
              } else if (
                userName !== userNameAdmin &&
                password === passwordAdmin
              ) {
                alert("Lütfen Kullanıcı Adınızı Kontrol Ediniz!!!");
              } else {
                alert("Lütfen Kullanıcı Adınızı Kontrol Ediniz!!!");
              }
            }}
            id="loginButton"
          >
            Giriş
          </button>
        </div>
      </div>
    </div>
  );
}
