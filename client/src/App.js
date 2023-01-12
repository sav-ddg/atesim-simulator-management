import "./App.css";
import { useState } from "react";
import {
  rooms,
  bilgisayar_ag,
  tab1_button_texts_1,
  tab1_button_texts_2,
  tab1_button_texts_3,
} from "./Consts";

function App() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="App">
      <div className="header">
        <h7>ATESİM KONTROL PANEL</h7>
      </div>
      <div className="tabs">
        <h1
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "activeTab" : "tab"}
        >
          Tab 1
        </h1>
        <h1
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "activeTab" : "tab"}
        >
          Tab 2
        </h1>
      </div>
      <div className="tableContainer">
        <table className="table">
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
              <td> Bilgisayar Aktif </td>
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
            <tr>
              {tab1_button_texts_1.map((val, key) => {
                return (
                  <td key={key} colSpan={3}>
                    <button>{val}</button>
                  </td>
                );
              })}
            </tr>
            <tr>
              {tab1_button_texts_2.map((val, key) => {
                return (
                  <td key={key} colSpan={3}>
                    <button>{val}</button>
                  </td>
                );
              })}
            </tr>
            <tr>
              {tab1_button_texts_3.map((val, key) => {
                return (
                  <td key={key} colSpan={3}>
                    <button>{val}</button>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
