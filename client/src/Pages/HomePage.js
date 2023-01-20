import "../App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Axios from "axios";
import {
  rooms,
  rooms_tab_3,
  bilgisayar_ag,
  tab1_button_texts_1,
  tab1_button_texts_2,
  tab1_button_texts_3,
  tab2_button_texts_1,
  tab2_button_texts_2,
  tab2_button_texts_3,
  bilgisayar_aktif,
  bilgisayar_kapalı,
  ag_aktif,
  ag_aktif_degil,
  baglanti_hatasi,
  projeksiyon_aktif,
  projeksiyon_kapali,
} from "../Consts";

export default function HomePage() {
  // Web Socket Connection
  // const socket = io.connect("http://localhost:3001");
  // const sendMessage_egitim_alani = () => {
  //   socket.emit("send_message", {
  //     name: "hello",
  //     command: "hello command",
  //     device: "pc",
  //   });
  // };

  // Tab Structure
  const [toggleState, setToggleState] = useState(1);

  // DateTime
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  // Status
  var [keys, setKeys] = useState([]);
  var [value, setValue] = useState([]);
  var [EK1_state, setEK1_state] = useState();
  var [EK1_network, setEK1_network] = useState(0);
  var [EK2_state, setEK2_state] = useState(0);
  var [EK2_network, setEK2_network] = useState(0);
  var [EK3_state, setEK3_state] = useState(0);
  var [EK3_network, setEK3_network] = useState(0);
  var [EK4_state, setEK4_state] = useState(0);
  var [EK4_network, setEK4_network] = useState(0);
  var [GK1_state, setGK1_state] = useState(0);
  var [GK1_network, setGK1_network] = useState(0);
  var [GK2_state, setGK2_state] = useState(0);
  var [GK2_network, setGK2_network] = useState(0);
  var [GK3_state, setGK3_state] = useState(0);
  var [GK3_network, setGK3_network] = useState(0);
  var [BS1_state, setBS1_state] = useState(0);
  var [BS1_network, setBS1_network] = useState(0);
  var [BS2_state, setBS2_state] = useState(0);
  var [BS2_network, setBS2_network] = useState(0);
  var [BS3_state, setBS3_state] = useState(0);
  var [BS3_network, setBS3_network] = useState(0);
  var [TP_state, setTP_state] = useState(0);
  var [TP_network, setTP_network] = useState(0);
  var [AP251IG_state, setAP251IG_state] = useState(0);
  var [AP251IG_network, setAP251IG_network] = useState(0);
  var [AP252IG_state, setAP252IG_state] = useState(0);
  var [AP252IG_network, setAP252IG_network] = useState(0);
  var [AP501IG_state, setAP501IG_state] = useState(0);
  var [AP501IG_network, setAP501IG_network] = useState(0);
  var [AP502IG_state, setAP502IG_state] = useState(0);
  var [AP502IG_network, setAP502IG_network] = useState(0);
  var [OKUN1IG_state, setOKUN1IG_state] = useState(0);
  var [OKUN1IG_network, setOKUN1IG_network] = useState(0);
  var [OKUN2IG_state, setOKUN2IG_state] = useState(0);
  var [OKUN2IG_network, setOKUN2IG_network] = useState(0);
  var [OKUN3IG_state, setOKUN3IG_state] = useState(0);
  var [OKUN3IG_network, setOKUN3IG_network] = useState(0);
  var [OKUN4IG_state, setOKUN4IG_state] = useState(0);
  var [OKUN4IG_network, setOKUN4IG_network] = useState(0);
  var [OMA1IG_state, setOMA1IG_state] = useState(0);
  var [OMA1IG_network, setOMA1IG_network] = useState(0);
  var [OMA2IG_state, setOMA2IG_state] = useState(0);
  var [OMA2IG_network, setOMA2IG_network] = useState(0);
  var [OMA3IG_state, setOMA3IG_state] = useState(0);
  var [OMA3IG_network, setOMA3IG_network] = useState(0);
  var [OMA4IG_state, setOMA4IG_state] = useState(0);
  var [OMA4IG_network, setOMA4IG_network] = useState(0);
  var [AE1IG_state, setAE1IG_state] = useState(0);
  var [AE1IG_network, setAE1IG_network] = useState(0);
  var [AE2IG_state, setAE2IG_state] = useState(0);
  var [AE2IG_network, setAE2IG_network] = useState(0);
  var [AE3IG_state, setAE3IG_state] = useState(0);
  var [AE3IG_network, setAE3IG_network] = useState(0);
  var [AE4IG_state, setAE4IG_state] = useState(0);
  var [AE4IG_network, setAE4IG_network] = useState(0);
  var [HP1IG_state, setHP1IG_state] = useState(0);
  var [HP1IG_network, setHP1IG_network] = useState(0);
  var [HP2IG_state, setHP2IG_state] = useState(0);
  var [HP2IG_network, setHP2IG_network] = useState(0);

  //Projections
  var [keysProjections, setKeysProjections] = useState([]);
  var [valueProjections, setValueProjections] = useState([]);

  var sys = [];
  var projections = [];
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const updateTime = () => {
    let dateArray = Date().split(" ");
    setDate(dateArray[2] + " " + dateArray[1] + " " + dateArray[3]);
    setTime(dateArray[4]);
    setTimeout(updateTime, 1000);
  };

  //Fetch Data From http://10.12.100.20:1880/systemstatus
  const request = () => {
    Axios.get("http://10.12.100.20:1880/systemstatus", {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      mode: "no-cors",
    }).then((response) => {
      var temp_keys = [];
      var temp_value = [];
      var temp_keys_proj = [];
      var temp_value_proj = [];
      sys = response.data.System;
      projections = response.data.Projection;
      Object.values(sys).map((item) => {
        Object.keys(item).map((val) => {
          temp_keys.push(val);
        });
      });
      setKeys(temp_keys);
      Object.values(sys).map((item) => {
        Object.values(item).map((val) => {
          temp_value.push(val);
        });
      });
      setValue(temp_value);

      Object.values(projections).map((item) => {
        Object.keys(item).map((val) => {
          temp_keys_proj.push(val);
        });
      });
      setKeysProjections(temp_keys_proj);
      Object.values(projections).map((item) => {
        Object.values(item).map((val) => {
          temp_value_proj.push(val);
        });
      });
      setValueProjections(temp_value_proj);
      console.log(temp_value_proj);

      console.log(keysProjections);
      console.log(valueProjections);
      setTimeout(request, 2000);
    });
  };

  const setStyleTexts = () => {
    if (value[keys.indexOf("EK1-State")] === 1) {
      setEK1_state(bilgisayar_aktif);
    } else {
      setEK1_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("EK1-Network")] === 1) {
      setEK1_network(ag_aktif);
    } else {
      setEK1_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("EK2-State")] === 1) {
      setEK2_state(bilgisayar_aktif);
    } else {
      setEK2_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("EK2-Network")] === 1) {
      setEK2_network(ag_aktif);
    } else {
      setEK2_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("EK3-State")] === 1) {
      setEK3_state(bilgisayar_aktif);
    } else {
      setEK3_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("EK3-Network")] === 1) {
      setEK3_network(ag_aktif);
    } else {
      setEK3_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("EK4-State")] === 1) {
      setEK4_state(bilgisayar_aktif);
    } else {
      setEK4_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("EK4-Network")] === 1) {
      setEK4_network(ag_aktif);
    } else {
      setEK4_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("GK1-State")] === 1) {
      setGK1_state(bilgisayar_aktif);
    } else {
      setGK1_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("GK1-Network")] === 1) {
      setGK1_network(ag_aktif);
    } else {
      setGK1_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("GK2-State")] === 1) {
      setGK2_state(bilgisayar_aktif);
    } else {
      setGK2_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("GK2-Network")] === 1) {
      setGK2_network(ag_aktif);
    } else {
      setGK2_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("GK3-State")] === 1) {
      setGK3_state(bilgisayar_aktif);
    } else {
      setGK3_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("GK3-Network")] === 1) {
      setGK3_network(ag_aktif);
    } else {
      setGK3_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("BS1-State")] === 1) {
      setBS1_state(bilgisayar_aktif);
    } else {
      setBS1_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("BS1-Network")] === 1) {
      setBS1_network(ag_aktif);
    } else {
      setBS1_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("BS2-State")] === 1) {
      setBS2_state(bilgisayar_aktif);
    } else {
      setBS2_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("BS2-Network")] === 1) {
      setBS2_network(ag_aktif);
    } else {
      setBS2_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("TP-State")] === 1) {
      setTP_state(bilgisayar_aktif);
    } else {
      setTP_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("TP-Network")] === 1) {
      setTP_network(ag_aktif);
    } else {
      setTP_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("25AP1IG-State")] === 1) {
      setAP251IG_state(bilgisayar_aktif);
    } else {
      setAP251IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("25AP1IG-Network")] === 1) {
      setAP251IG_network(ag_aktif);
    } else {
      setAP251IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("25AP2IG-State")] === 1) {
      setAP252IG_state(bilgisayar_aktif);
    } else {
      setAP252IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("25AP2IG-Network")] === 1) {
      setAP252IG_network(ag_aktif);
    } else {
      setAP252IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("50AP1IG-State")] === 1) {
      setAP501IG_state(bilgisayar_aktif);
    } else {
      setAP501IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("50AP1IG-Network")] === 1) {
      setAP501IG_network(ag_aktif);
    } else {
      setAP501IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("50AP2IG-State")] === 1) {
      setAP502IG_state(bilgisayar_aktif);
    } else {
      setAP502IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("50AP2IG-Network")] === 1) {
      setAP502IG_network(ag_aktif);
    } else {
      setAP502IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("OKUN1IG-State")] === 1) {
      setOKUN1IG_state(bilgisayar_aktif);
    } else {
      setOKUN1IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("OKUN1IG-Network")] === 1) {
      setOKUN1IG_network(ag_aktif);
    } else {
      setOKUN1IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("OKUN2IG-State")] === 1) {
      setOKUN2IG_state(bilgisayar_aktif);
    } else {
      setOKUN2IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("OKUN2IG-Network")] === 1) {
      setOKUN2IG_network(ag_aktif);
    } else {
      setOKUN2IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("OKUN3IG-State")] === 1) {
      setOKUN3IG_state(bilgisayar_aktif);
    } else {
      setOKUN3IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("OKUN3IG-Network")] === 1) {
      setOKUN3IG_network(ag_aktif);
    } else {
      setOKUN3IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("OKUN4IG-State")] === 1) {
      setOKUN4IG_state(bilgisayar_aktif);
    } else {
      setOKUN4IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("OKUN4IG-Network")] === 1) {
      setOKUN4IG_network(ag_aktif);
    } else {
      setOKUN4IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("OMA1IG-State")] === 1) {
      setOMA1IG_state(bilgisayar_aktif);
    } else {
      setOMA1IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("OMA1IG-Network")] === 1) {
      setOMA1IG_network(ag_aktif);
    } else {
      setOMA1IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("OMA2IG-State")] === 1) {
      setOMA2IG_state(bilgisayar_aktif);
    } else {
      setOMA2IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("OMA2IG-Network")] === 1) {
      setOMA2IG_network(ag_aktif);
    } else {
      setOMA2IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("OMA3IG-State")] === 1) {
      setOMA3IG_state(bilgisayar_aktif);
    } else {
      setOMA3IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("OMA3IG-Network")] === 1) {
      setOMA3IG_network(ag_aktif);
    } else {
      setOMA3IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("OMA4IG-State")] === 1) {
      setOMA4IG_state(bilgisayar_aktif);
    } else {
      setOMA4IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("OMA4IG-Network")] === 1) {
      setOMA4IG_network(ag_aktif);
    } else {
      setOMA4IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("AE1IG-State")] === 1) {
      setAE1IG_state(bilgisayar_aktif);
    } else {
      setAE1IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("AE1IG-Network")] === 1) {
      setAE1IG_network(ag_aktif);
    } else {
      setAE1IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("AE2IG-State")] === 1) {
      setAE2IG_state(bilgisayar_aktif);
    } else {
      setAE2IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("AE2IG-Network")] === 1) {
      setAE2IG_network(ag_aktif);
    } else {
      setAE2IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("AE3IG-State")] === 1) {
      setAE3IG_state(bilgisayar_aktif);
    } else {
      setAE3IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("AE3IG-Network")] === 1) {
      setAE3IG_network(ag_aktif);
    } else {
      setAE3IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("AE4IG-State")] === 1) {
      setAE4IG_state(bilgisayar_aktif);
    } else {
      setAE4IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("AE4IG-Network")] === 1) {
      setAE4IG_network(ag_aktif);
    } else {
      setAE4IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("HP1IG-State")] === 1) {
      setHP1IG_state(bilgisayar_aktif);
    } else {
      setHP1IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("HP1IG-Network")] === 1) {
      setHP1IG_network(ag_aktif);
    } else {
      setHP1IG_network(ag_aktif_degil);
    }
    if (value[keys.indexOf("HP2IG-State")] === 1) {
      setHP2IG_state(bilgisayar_aktif);
    } else {
      setHP2IG_state(bilgisayar_kapalı);
    }
    if (value[keys.indexOf("HP2IG-Network")] === 1) {
      setHP2IG_network(ag_aktif);
    } else {
      setHP2IG_network(ag_aktif_degil);
    }

    const liste = document.getElementsByTagName("td");
    for (var i = 0; i < liste.length; i++) {
      if (
        liste[i].innerHTML === "Ağ Aktif Değil" ||
        liste[i].innerHTML === "Ağ Pasif" ||
        liste[i].innerHTML === "Bilgisayar Kapalı"
      ) {
        liste[i].style.color = "#FF2400";
      } else if (
        liste[i].innerHTML === "Ağ\nAktif" ||
        liste[i].innerHTML === "Ağ Aktif" ||
        liste[i].innerHTML === "Bilgisayar\nAktif" ||
        liste[i].innerHTML === "Bilgisayar Aktif"
      ) {
        liste[i].style.color = "#27ff00";
      }
    }
    setTimeout(setStyleTexts, 500);
  };

  useEffect(() => {
    request();
    setStyleTexts();
    updateTime();
    //sendMessage_egitim_alani();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img
          className="img"
          style={{ width: "250px" }}
          src="ATESIM_Logo_old.png"
          alt="img"
        />
        <div className="baslik">
          <h7>ATESİM KONTROL PANEL</h7>
        </div>
        <div className="dateTime">
          <h7 className="date">{date}</h7>
          <h7 style={{ paddingRight: "0.5em" }} className="time">
            {time}
          </h7>
        </div>
      </div>

      <div className="tableContainer">
        <div className="tabs">
          <h1
            onClick={() => {
              toggleTab(1);
              console.log(keys);
              console.log(value);
            }}
            className={toggleState === 1 ? "activeTab" : "tab"}
          >
            Eğitim Alanı Bilgisayarları
          </h1>
          <h1
            onClick={() => toggleTab(2)}
            className={toggleState === 2 ? "activeTab" : "tab"}
          >
            Projeksiyon Kontrolü
          </h1>
          <h1
            onClick={() => toggleTab(3)}
            className={toggleState === 3 ? "activeTab" : "tab"}
          >
            EK / GK / Taktik Plan
          </h1>
        </div>

        <table
          id="tab1"
          className={toggleState === 1 ? "table_active" : "table"}
        >
          <thead>
            <tr>
              {rooms.map((val, key) => {
                return (
                  <th colSpan={3} key={key}>
                    {val}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {rooms.map(() => {
                return bilgisayar_ag;
              })}
            </tr>
            <tr>
              <td>25AP1IG</td>
              <td>
                {value[keys.indexOf("25AP1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("25AP1IG-Network")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>50AP1IG</td>
              <td>
                {value[keys.indexOf("50AP1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("50AP1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>OMA1IG</td>
              <td>
                {value[keys.indexOf("OMA1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("OMA1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>OKUN1IG</td>
              <td>
                {value[keys.indexOf("OKUN1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("OKUN1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>AE1IG</td>
              <td>
                {value[keys.indexOf("AE1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("AE1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>HP1IG</td>
              <td>
                {value[keys.indexOf("HP1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("HP1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
            </tr>
            <tr>
              <td>25AP2IG</td>
              <td>
                {value[keys.indexOf("25AP2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("25AP2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>50AP2IG</td>
              <td>
                {value[keys.indexOf("50AP2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("50AP2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>OMA2IG</td>
              <td>
                {value[keys.indexOf("OMA2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("OMA2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>OKUN2IG</td>
              <td>
                {value[keys.indexOf("OKUN2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("OKUN2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>AE2IG</td>
              <td>
                {value[keys.indexOf("AE2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("AE2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>HP2IG</td>
              <td>
                {value[keys.indexOf("HP2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("HP2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>OMA3IG</td>
              <td>
                {value[keys.indexOf("OMA3IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("OMA3IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>OKUN3IG</td>
              <td>
                {value[keys.indexOf("OKUN3IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("OKUN3IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>AE3IG</td>
              <td>
                {value[keys.indexOf("AE3IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("AE3IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>OMA4IG</td>
              <td>
                {value[keys.indexOf("OMA4IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("OMA4IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>OKUN4IG</td>
              <td>
                {value[keys.indexOf("OKUN4IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("OKUN4IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>AE4IG</td>
              <td>
                {value[keys.indexOf("AE4IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("AE4IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table
          id="tab2"
          className={toggleState === 2 ? "table_active" : "table"}
        >
          <thead>
            <tr>
              {rooms.map((val, key) => {
                return (
                  <th colSpan={4} key={key}>
                    {val}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("25AP1PR1-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("25AP1PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("25AP1PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AP1PR1
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("25AP1PR2-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("25AP1PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("25AP1PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AP1PR2
              </td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("50AP1PR1-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("50AP1PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("50AP1PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AP1PR1
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("50AP1PR2-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("50AP1PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("50AP1PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AP1PR2
              </td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA1PR1-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA1PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA1PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA1PR1
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA1PR2-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA1PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA1PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA1PR2
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA1PR3-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA1PR3-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA1PR3-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA1PR3
              </td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OKUN1PR-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OKUN1PR-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OKUN1PR-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OKUN1PR
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE1PR1-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE1PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE1PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE1PR1
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE1PR2-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE1PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE1PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE1PR2
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("HP1PR-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("HP1PR-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("HP1PR-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                HP1PR
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("HP2PR-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("HP2PR-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("HP2PR-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                HP2PR
              </td>
              <td></td>
            </tr>

            <tr>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("25AP2PR1-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("25AP2PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("25AP2PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AP2PR1
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("25AP2PR2-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("25AP2PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("25AP2PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AP2PR2
              </td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("50AP2PR1-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("50AP2PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("50AP2PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AP2PR1
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("50AP2PR2-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("50AP2PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("50AP2PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AP2PR2
              </td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA2PR1-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA2PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA2PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA2PR1
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA2PR2-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA2PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA2PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA2PR2
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA2PR3-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA2PR3-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA2PR3-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA2PR3
              </td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OKUN2PR-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OKUN2PR-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OKUN2PR-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OKUN2PR
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE2PR1-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE2PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE2PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE2PR1
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE2PR2-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE2PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE2PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE2PR2
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE2PR3-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE2PR3-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE2PR3-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE2PR3
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE2PR4-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE2PR4-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE2PR4-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE2PR4
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA3PR1-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA3PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA3PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA3PR1
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA3PR2-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA3PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA3PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA3PR2
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA3PR3-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA3PR3-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA3PR3-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA3PR3
              </td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OKUN3PR-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OKUN3PR-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OKUN3PR-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OKUN3PR
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE3PR1-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE3PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE3PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE3PR1
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE3PR2-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE3PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE3PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE3PR2
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE3PR3-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE3PR3-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE3PR3-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE3PR3
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE3PR4-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE3PR4-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE3PR4-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE3PR4
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr style={{ borderTop: "2.5px solid rgb(218, 218, 228)" }}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA4PR1-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA4PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA4PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA4PR1
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA4PR2-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA4PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA4PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA4PR2
              </td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OMA4PR3-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OMA4PR3-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OMA4PR3-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OMA4PR3
              </td>
              <td></td>
              <td
                style={
                  valueProjections[
                    keysProjections.indexOf("OKUN4PR-Status")
                  ] === 4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("OKUN4PR-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("OKUN4PR-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                OKUN4PR
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE4PR1-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE4PR1-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE4PR1-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE4PR1
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE4PR2-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE4PR2-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE4PR2-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE4PR2
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE4PR3-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE4PR3-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE4PR3-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE4PR3
              </td>
              <td
                style={
                  valueProjections[keysProjections.indexOf("AE4PR4-Status")] ===
                  4
                    ? { backgroundColor: "red" }
                    : valueProjections[
                        keysProjections.indexOf("AE4PR4-Status")
                      ] === 16
                    ? { backgroundColor: "green" }
                    : valueProjections[
                        keysProjections.indexOf("AE4PR4-Status")
                      ] === 1
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "pink" }
                }
              >
                AE4PR4
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table
          id="tab3"
          className={toggleState === 3 ? "table_active" : "table"}
        >
          <thead>
            <tr>
              <th colSpan={3}> Brifing / Taktik Plan </th>
              <th colSpan={4}> Eğitmen Konsolları </th>
              <th colSpan={3}> Gözetleyici Konsollar </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {rooms_tab_3.map((val, key) => {
                return <td key={key}>{val}</td>;
              })}
            </tr>
            <tr>
              <td>
                {value[keys.indexOf("BS1-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("BS2-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("TP-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("EK1-State")] === 1
                  ? bilgisayar_aktif
                  : bilgisayar_kapalı}
              </td>
              <td>
                {value[keys.indexOf("EK2-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("EK3-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("EK4-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("GK1-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("GK2-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
              <td>
                {value[keys.indexOf("GK3-State")] === 1
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
              </td>
            </tr>
            <tr>
              <td>
                {value[keys.indexOf("BS1-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("BS2-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("TP-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("EK1-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("EK2-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("EK3-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("EK4-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("GK1-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("GK2-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
              <td>
                {value[keys.indexOf("GK3-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Aktif Değil"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="gridContainer">
        {tab1_button_texts_1.map((val, key) => {
          return (
            <>
              <button
                // onClick={() => {
                //   console.log(systemStatus);
                //   console.log(networkStatus);
                // }}
                key={key}
                className={toggleState === 1 ? "gridButtons" : "gridbtns"}
              >
                {val}
              </button>
              {/* <hr
                style={{
                  width: "4px",
                  height: "100px",
                  background: "white",
                  border: "0px",
                }}
              /> */}
            </>
          );
        })}
        <hr
          className={toggleState === 1 ? "lineActive" : "line"}
          style={{ width: "100%" }}
        />
        {/* <hr style={{ width: "100px" }}></hr> */}
        {tab1_button_texts_2.map((val, key) => {
          return (
            <>
              <button
                key={key}
                className={toggleState === 1 ? "gridButtons" : "gridbtns"}
              >
                {val}
              </button>
            </>
          );
        })}
        <hr
          className={toggleState === 1 ? "lineActive" : "line"}
          style={{ width: "100%" }}
        />
        {tab1_button_texts_3.map((val, key) => {
          return (
            <>
              <button
                key={key}
                className={toggleState === 1 ? "gridButtons" : "gridbtns"}
              >
                {val}
              </button>
            </>
          );
        })}
        {tab2_button_texts_1.map((val, key) => {
          return (
            <button
              key={key}
              className={toggleState === 2 ? "gridButtons" : "gridbtns"}
            >
              {val}
            </button>
          );
        })}
        <hr
          className={toggleState === 2 ? "lineActive" : "line"}
          style={{ width: "100%" }}
        />
        {tab2_button_texts_2.map((val, key) => {
          return (
            <button
              key={key}
              className={toggleState === 2 ? "gridButtons" : "gridbtns"}
            >
              {val}
            </button>
          );
        })}
        <hr
          className={toggleState === 2 ? "lineActive" : "line"}
          style={{ width: "100%" }}
        />
        {tab2_button_texts_3.map((val, key) => {
          return (
            <button
              key={key}
              className={toggleState === 2 ? "gridButtons" : "gridbtns"}
            >
              {val}
            </button>
          );
        })}
        {rooms_tab_3.map((val, key) => {
          return (
            <button
              key={key}
              className={toggleState === 3 ? "gridButtonsTab3" : "gridbtns"}
            >
              Aç
            </button>
          );
        })}
        <hr
          className={toggleState === 3 ? "lineActive" : "line"}
          style={{ width: "100%" }}
        />
        {rooms_tab_3.map((val, key) => {
          return (
            <button
              key={key}
              className={toggleState === 3 ? "gridButtonsTab3" : "gridbtns"}
            >
              Kapat
            </button>
          );
        })}
        <hr
          className={toggleState === 3 ? "lineActive" : "line"}
          style={{ width: "100%" }}
        />
        {rooms_tab_3.map((val, key) => {
          return (
            <button
              key={key}
              className={toggleState === 3 ? "gridButtonsTab3" : "gridbtns"}
            >
              Yeniden Başlat
            </button>
          );
        })}
      </div>
    </div>
  );
}
