import "./App.css";
import { useState } from "react";

function App() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="App">
      <div className="header">ATESİM KONTROL PANEL</div>
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
              <th colSpan={3}> 25M </th>
              <th colSpan={3}> 50M </th>
              <th colSpan={3}> OMA </th>
              <th colSpan={3}> OKUN </th>
              <th colSpan={3}> AE </th>
              <th colSpan={3}> HP </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Bilgisayar </td>
              <td>Ağ</td>
              <td></td>
              <td>Bilgisayar </td>
              <td>Ağ</td>
              <td></td>
              <td>Bilgisayar </td>
              <td>Ağ</td>
              <td></td>
              <td>Bilgisayar </td>
              <td>Ağ</td>
              <td></td>
              <td>Bilgisayar </td>
              <td>Ağ</td>
              <td></td>
              <td>Bilgisayar </td>
              <td>Ağ</td>
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
              <td colSpan={3}>
                <button> 25m Atış Poligonu Açılış Modu </button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
              <td colSpan={3}>
                <button></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
