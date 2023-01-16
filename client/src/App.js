import "./App.css";
import { useEffect, useState } from "react";
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
  bos_satir_tab_3,
} from "./Consts";

function App() {
  const [toggleState, setToggleState] = useState(1);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const updateTime = () => {
    let dateArray = Date().split(" ");
    setDate(dateArray[2] + " " + dateArray[1] + " " + dateArray[3]);
    setTime(dateArray[4]);
    setTimeout(updateTime, 1000);
  };
  useEffect(() => {
    updateTime();
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
          <h7 className="time">{time}</h7>
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
              <td> 25AP1IG </td>
              <td></td>
              <td></td>
              <td>50AP1IG</td>
              <td></td>
              <td></td>
              <td>OMA1IG</td>
              <td></td>
              <td></td>
              <td>OKUN1IG</td>
              <td></td>
              <td></td>
              <td>AE1IG</td>
              <td></td>
              <td></td>
              <td>HP1IG</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>25AP2IG</td>
              <td></td>
              <td></td>
              <td>50AP2IG</td>
              <td></td>
              <td></td>
              <td>OMA2IG</td>
              <td></td>
              <td></td>
              <td>OKUN2IG</td>
              <td></td>
              <td></td>
              <td>AE2IG</td>
              <td></td>
              <td></td>
              <td>HP2IG</td>
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
              <td>OMA3IG</td>
              <td></td>
              <td></td>
              <td>OKUN3IG</td>
              <td></td>
              <td></td>
              <td>AE3IG</td>
              <td></td>
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
              <td>OMA4IG</td>
              <td></td>
              <td></td>
              <td>OKUN4IG</td>
              <td></td>
              <td></td>
              <td>AE4IG</td>
              <td></td>
              <td></td>
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
              <th colSpan={4}> Eğitmen Konsolları </th>
              <th colSpan={3}> Gözetleyici Konsollar </th>
              <th colSpan={3}> Brifing / Taktik Plan </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {rooms_tab_3.map((val, key) => {
                return <td key={key}>{val}</td>;
              })}
            </tr>
            {bos_satir_tab_3}
            {bos_satir_tab_3}
          </tbody>
        </table>
      </div>
      <div className="gridContainer">
        {tab1_button_texts_1.map((val, key) => {
          return (
            <>
              <button
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
