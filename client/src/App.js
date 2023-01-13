import "./App.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  rooms,
  bilgisayar_ag,
  tab1_button_texts_1,
  tab2_button_texts_1,
  bos_satir,
} from "./Consts";

function App() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
    /*const grid = document.getElementsByClassName("grid");
    for (var i = 0; i < grid.length; i++) {
      grid[i].remove();
    }*/
  };

  return (
    <div className="App">
      <div className="header">
        <h7>ATESİM KONTROL PANEL</h7>
      </div>

      <div className="tableContainer">
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
        <table className={toggleState === 1 ? "table_active" : "table"}>
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
        <table className={toggleState === 2 ? "table_active" : "table"}>
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
              <td> 25AP1PR1 </td>
              <td> 25AP1PR2 </td>
              <td> 25AP2PR1 </td>
              <td> 25AP2PR2 </td>
              <td>50AP1PR1</td>
              <td>50AP1PR2</td>
              <td>50AP2PR1</td>
              <td>50AP2PR2</td>
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
            {bos_satir}
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
            {bos_satir}
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
            {bos_satir}
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
            {bos_satir}
          </tbody>
        </table>
      </div>
      <div className="gridContainer">
        {tab1_button_texts_1.map((val, key) => {
          return (
            <button className={toggleState === 1 ? "gridButtons" : "gridbtns"}>
              {val}
            </button>
          );
        })}
        {tab2_button_texts_1.map((val, key) => {
          return (
            <button className={toggleState === 2 ? "gridButtons" : "gridbtns"}>
              {val}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
