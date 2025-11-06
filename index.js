import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {Server} from "socket.io"

const app = express();
const server = http.createServer(app);
const io = new Server(server)

const __dirname = dirname(fileURLToPath(import.meta.url))

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"))
})

server.listen(3000, () => {
    console.log(`server is listening at http://localhost:3000`);  
})
