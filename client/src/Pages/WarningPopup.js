import "../App.css";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import InfoPopup from "./InfoPopup";

const WarningPopup = ({ open, close, str }) => {
  const [infoPopup, setInfoPopup] = React.useState(false);

  const ws_message = (str) => {
    if (str === " 25m Atış Poligonu \n Açılış Modu ") {
      //const socket_egitim_alani = io.connect("c2c.itm.svrn:1880/pccontrol");
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Open",
        Site: "25AP",
        CommanderName: "EK5",
      });

      //const socket_egitim_alani = io.connect("c2c.itm.svrn:1880/poecontrol");
      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "25AP",
        Hostname: "25APSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      //const socket_egitim_alani = io.connect("websocket : c2c.itm.svrn:1880/projectioncontrol");
      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Open",
        Site: "25AP",
        CommanderName: "EK5",
      });
    } else if (str === " 50m Atış Poligonu \n Açılış Modu ") {
      //const socket_egitim_alani = io.connect("c2c.itm.svrn:1880/pccontrol");
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Open",
        Site: "50AP",
        CommanderName: "EK5",
      });

      //const socket_egitim_alani = io.connect("c2c.itm.svrn:1880/poecontrol");
      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "50AP",
        Hostname: "50APSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      //const socket_egitim_alani = io.connect("websocket : c2c.itm.svrn:1880/projectioncontrol");
      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Open",
        Site: "50AP",
        CommanderName: "EK5",
      });
    } else if (str === " Ortak Muharebe Odaları \n Açılış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Open",
        Site: "OMA",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "OMA",
        Hostname: "OMA12SW.MGMT.SVRN",
        CommanderName: "EK5",
      });
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "OMA",
        Hostname: "OMA34SW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Open",
        Site: "OMA",
        CommanderName: "EK5",
      });
    } else if (str === " ÖKUN Odaları \n Açılış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Open",
        Site: "OKUN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "OKUN",
        Hostname: "OKUNSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Open",
        Site: "OKUN",
        CommanderName: "EK5",
      });
    } else if (str === " Atış Evi \n Açılış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Open",
        Site: "OMA",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "AE",
        Hostname: "AE12SW.MGMT.SVRN",
        CommanderName: "EK5",
      });
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "AE",
        Hostname: "AE34SW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Open",
        Site: "AE",
        CommanderName: "EK5",
      });
    } else if (str === " Hareketli Platformlar \n Açılış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Open",
        Site: "HP",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "HP",
        Hostname: "HPLSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Open",
        Site: "HP",
        CommanderName: "EK5",
      });
    } else if (str === " 25m Atış Poligonu \n Kapanış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Open",
        Site: "25AP",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "25AP",
        Hostname: "25APSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Open",
        Site: "25AP",
        CommanderName: "EK5",
      });
    } else if (str === " 50m Atış Poligonu \n Kapanış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Close",
        Site: "50AP",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Never",
        Site: "50AP",
        Hostname: "50APSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Close",
        Site: "50AP",
        CommanderName: "EK5",
      });
    } else if (str === " Ortak Muharebe Odaları \n Kapanış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Close",
        Site: "OMA",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Never",
        Site: "OMA",
        Hostname: "OMA12SW.MGMT.SVRN",
        CommanderName: "EK5",
      });
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Never",
        Site: "OMA",
        Hostname: "OMA34SW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Close",
        Site: "OMA",
        CommanderName: "EK5",
      });
    } else if (str === " ÖKUN Odaları \n Kapanış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Close",
        Site: "OKUN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Never",
        Site: "OKUN",
        Hostname: "OKUNSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Close",
        Site: "OKUN",
        CommanderName: "EK5",
      });
    } else if (str === " Atış Evi \n Kapanış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Close",
        Site: "AE",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Never",
        Site: "AE",
        Hostname: "AE12SW.MGMT.SVRN",
        CommanderName: "EK5",
      });
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Never",
        Site: "AE",
        Hostname: "AE34SW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Close",
        Site: "AE",
        CommanderName: "EK5",
      });
    } else if (str === " Hareketli Platformlar \n Kapanış Modu ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Close",
        Site: "HP",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Never",
        Site: "HP",
        Hostname: "HPLSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Close",
        Site: "HP",
        CommanderName: "EK5",
      });
    } else if (str === " 25m Atış Poligonu \n Yeniden Başlat ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Restart",
        Site: "25AP",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "25AP",
        Hostname: "25APSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Restart",
        Site: "25AP",
        CommanderName: "EK5",
      });
    } else if (str === " 50m Atış Poligonu \n Yeniden Başlat ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Restart",
        Site: "50AP",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "50AP",
        Hostname: "50APSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Restart",
        Site: "50AP",
        CommanderName: "EK5",
      });
    } else if (str === " Ortak Muharebe Odaları \n Yeniden Başlat ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Restart",
        Site: "OMA",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "OMA",
        Hostname: "OMA12PSW.MGMT.SVRN",
        CommanderName: "EK5",
      });
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "OMA",
        Hostname: "OMA34PSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Restart",
        Site: "OMA",
        CommanderName: "EK5",
      });
    } else if (str === " ÖKUN Odaları \n Yeniden Başlat ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Restart",
        Site: "OKUN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "OKUN",
        Hostname: "OKUNSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Restart",
        Site: "OKUN",
        CommanderName: "EK5",
      });
    } else if (str === " Atış Evi \n Yeniden Başlat ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Restart",
        Site: "AE",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "AE",
        Hostname: "AE12SW.MGMT.SVRN",
        CommanderName: "EK5",
      });
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "AE",
        Hostname: "AE1234SW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Restart",
        Site: "AE",
        CommanderName: "EK5",
      });
    } else if (str === " Hareketli Platformlar \n Yeniden Başlat ") {
      const socket_egitim_alani_pccontrol = io.connect("http://localhost:3001");
      socket_egitim_alani_pccontrol.emit("send_message", {
        Command: "Restart",
        Site: "HP",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_poecontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_poecontrol.emit("send_message", {
        Command: "Auto",
        Site: "HP",
        Hostname: "HPSW.MGMT.SVRN",
        CommanderName: "EK5",
      });

      const socket_egitim_alani_projectioncontrol = io.connect(
        "http://localhost:3001"
      );
      socket_egitim_alani_projectioncontrol.emit("send_message", {
        Command: "Restart",
        Site: "HP",
        CommanderName: "EK5",
      });
    } else {
    }
  };

  var temp = str.slice(0, str.length - 5);
  const warning = temp + "Komutu Göndermek İstediğinize\n Emin Misiniz ?";
  return (
    <>
      <Dialog
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        open={open}
        onClose={close}
      >
        <div className="warningContainer">
          <div className="question">
            <img src="Question-104.png" />
            <p>{warning}</p>
          </div>
          <div className="logoutButtons">
            <button
              className="evetBtn"
              onClick={() => {
                ws_message(str);
                close();
                setInfoPopup(true);
              }}
            >
              EVET
            </button>
            <button
              className="hayırBtn"
              onClick={() => {
                close();
              }}
            >
              HAYIR
            </button>
          </div>
        </div>
      </Dialog>
      <InfoPopup open={infoPopup} str={str} close={() => setInfoPopup(false)} />
    </>
  );
};

export default WarningPopup;
