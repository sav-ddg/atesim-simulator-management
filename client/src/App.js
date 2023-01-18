import "./App.css";
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
  bos_satir_tab_2,
} from "./Consts";

function App() {
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
  var sys = [];

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
    setTimeout(request, 2000);
    Axios.get("http://10.12.100.20:1880/systemstatus", {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      mode: "no-cors",
    }).then((response) => {
      sys = response.data.System;
      Object.values(sys).map((item) => {
        Object.keys(item).map((val) => {
          keys.push(val);
        });
      });
      Object.values(sys).map((item) => {
        Object.values(item).map((val) => {
          value.push(val);
        });
      });
    });
    console.log(sys);
  };

  const setStyle = () => {
    const liste = document.getElementsByTagName("td");
    for (var i = 0; i < liste.length; i++) {
      if (
        liste[i].innerHTML === "Pasif" ||
        liste[i].innerHTML === "Ağ Pasif" ||
        liste[i].innerHTML === "Bilgisayar Kapalı"
      ) {
        liste[i].style.color = "#ff0000";
      } else if (
        liste[i].innerHTML === "Ağ\nAktif" ||
        liste[i].innerHTML === "Ağ Aktif" ||
        liste[i].innerHTML === "Bilgisayar\nAktif" ||
        liste[i].innerHTML === "Bilgisayar Aktif"
      ) {
        liste[i].style.color = "#27ff00";
      }
    }

    setTimeout(setStyle, 200);
  };

  useEffect(() => {
    updateTime();
    request();
    setStyle();
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
            onClick={() => toggleTab(1)}
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
                  ? "Bilgisayar Aktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("25AP1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>50AP1IG</td>
              <td>
                {value[keys.indexOf("50AP1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("50AP1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>OMA1IG</td>
              <td>
                {value[keys.indexOf("OMA1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("OMA1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>OKUN1IG</td>
              <td>
                {value[keys.indexOf("OKUN1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("OKUN1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>AE1IG</td>
              <td>
                {value[keys.indexOf("AE1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("AE1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>HP1IG</td>
              <td>
                {value[keys.indexOf("HP1IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("HP1IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
            </tr>
            <tr>
              <td>25AP2IG</td>
              <td>
                {value[keys.indexOf("25AP2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("25AP2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>50AP2IG</td>
              <td>
                {value[keys.indexOf("50AP2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("50AP2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>OMA2IG</td>
              <td>
                {value[keys.indexOf("OMA2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("OMA2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>OKUN2IG</td>
              <td>
                {value[keys.indexOf("OKUN2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("OKUN2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>AE2IG</td>
              <td>
                {value[keys.indexOf("AE2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("AE2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>HP2IG</td>
              <td>
                {value[keys.indexOf("HP2IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("HP2IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
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
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("OMA3IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>OKUN3IG</td>
              <td>
                {value[keys.indexOf("OKUN3IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("OKUN3IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>AE3IG</td>
              <td>
                {value[keys.indexOf("AE3IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("AE3IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
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
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("OMA4IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>OKUN4IG</td>
              <td>
                {value[keys.indexOf("OKUN4IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td>
                {value[keys.indexOf("OKUN4IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
              </td>
              <td>AE4IG</td>
              <td>
                {value[keys.indexOf("AE4IG-State")] === 1
                  ? "Bilgisayar\nAktif"
                  : "Pasif"}
              </td>
              <td style={{}}>
                {value[keys.indexOf("AE4IG-Network")] === 1
                  ? "Ağ\nAktif"
                  : "Pasif"}
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
              <td> AP1PR1 </td>
              <td> AP1PR2 </td>
              <td> AP2PR1 </td>
              <td> AP2PR2 </td>
              <td>AP1PR1</td>
              <td>AP1PR2</td>
              <td>AP2PR1</td>
              <td>AP2PR2</td>
              <td>OMA1PR1</td>
              <td>OMA1PR2</td>
              <td>OMA1PR3</td>
              <td></td>
              <td>OKUN1PR</td>
              <td>OKUN2PR</td>
              <td>OKUN3PR</td>
              <td>OKUN4PR</td>
              <td>AE1PR1</td>
              <td>AE1PR2</td>
              <td></td>
              <td></td>
              <td></td>
              <td>HP1PR1</td>
              <td>HP1PR2</td>
              <td></td>
            </tr>
            {bos_satir_tab_2}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>OMA2PR1</td>
              <td>OMA2PR2</td>
              <td>OMA2PR3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>AE2PR1</td>
              <td>AE2PR2</td>
              <td>AE2PR3</td>
              <td>AE2PR4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {bos_satir_tab_2}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>OMA3PR1</td>
              <td>OMA3PR2</td>
              <td>OMA3PR3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>AE3PR1</td>
              <td>AE3PR2</td>
              <td>AE3PR3</td>
              <td>AE3PR4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {bos_satir_tab_2}
            <tr style={{ borderTop: "2.5px solid rgb(218, 218, 228)" }}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>OMA4PR1</td>
              <td>OMA4PR2</td>
              <td>OMA4PR3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>AE4PR1</td>
              <td>AE4PR2</td>
              <td>AE4PR3</td>
              <td>AE4PR4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {bos_satir_tab_2}
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
                  ? "Bilgisayar Aktif"
                  : "Bilgisayar Kapalı"}
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
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("BS2-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("TP-State")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("EK1-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("EK2-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("EK3-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("EK4-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("GK1-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("GK2-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
              </td>
              <td>
                {value[keys.indexOf("GK3-Network")] === 1
                  ? "Ağ Aktif"
                  : "Ağ Pasif"}
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

export default App;
