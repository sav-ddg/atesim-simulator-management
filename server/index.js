const express = require("express"); //HTTP request management
const app = express();
const http = require("http");
const { Server } = require("socket.io"); //For web socket server
const cors = require("cors"); //In order to communicate frontend & backend

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  //Web Socket Connection
  socket.on("send_message", (data) => {
    console.log(data);
    //To broadcast other users
    //socket.broadcast.emit("receive_message", data);
  });
});

// const interval = setInterval(() => {
//   wss.clients.forEach((ws) => {
//      if (ws.isAlive === false) {
//           return ws.terminate()
//       }

//       ws.isAlive = false
//       ws.ping(() => { ping(ws) })
//   })
// }, 30000)

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
