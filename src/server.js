import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import { socketHandler } from "./modules/socket/socket.js";

const server = http.createServer(app);
const io = new Server(server);

socketHandler(io)

server.listen(3000, () => {
  console.log("Server 3000 portda ishlamoqda...");
});
