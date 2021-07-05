const express = require("express");
const http = require("http");
const app = express();

const userRouter = require("./routers/user.router");
const chatRouter = require("./routers/chat.router");
const messageRouter = require("./routers/message.router");
const messageStatusRouter = require("./routers/message-status.router");
const participantsRouter = require("./routers/participants-router");

const db = require("./controllers/message.controller");

const PORT = 3000;

const server = http.createServer(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

const io = require("socket.io")(null, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.listen(3005);

const connections = [];

io.on("connection", (socket) => {
  console.log("User connected, socket.id:", socket.id);

  socket.emit("connection", null);

  socket.join("room");

  socket.on("new_room", function (channel) {
    io.in("room").emit("new_room", channel);
    console.log("socket.join(room)", channel);
  });

  socket.on("send_message", (msg) => {
    db.createSocketMessage(msg).then((data) => {
      io.in("room").emit("send_message", data);
      console.log("received msg", data);
    });
  });

  socket.on("disconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
    console.log("User disconnected");
  });
});

app.use(express.static(__dirname));

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/messages", messageRouter);
app.use("/api/message/status", messageStatusRouter);
app.use("/api/participants", participantsRouter);

server.listen(PORT, () => {
  console.log(`listening on :${PORT}`);
});

module.exports = {
  io,
}
