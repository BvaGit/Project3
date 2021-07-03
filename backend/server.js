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
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

global.io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected, socket.id:", socket.id);
  socket.emit("connection", null);

  socket.join("room");

  socket.on("send_message", (msg) => {
    db.createSocketMessage(msg).then((data) => {
      io.in("room").emit("send_message", data);
      console.log("received msg", data);
    });
  });

  socket.on("disconnect", (socket) => {
    console.log("User disconnect", socket.id);
  });
});

const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
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
