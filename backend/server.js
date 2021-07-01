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

global.io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const emitMostRecentMessages = (data) => {
  console.log(data);
  io.emit("result", data);
};

io.on("connection", (socket) => {
  console.log("User connected, socket.id:", socket.id);
  socket.emit("connection", null);

  socket.on("SEND_MESSAGE", (msg) => {
    console.log("message: " + msg);
    db.createSocketMessage(msg)
      .then((data) => {
        emitMostRecentMessages(data);
      })
      .catch((err) => {
        io.emit(err);
        console.log("ERRRROR");
      });
  });

  // socket.on("chat message", function (msg) {
  //   var keys = Object.keys(socket.rooms);
  //   for (var i = 0; i < keys.length; i++) {
  //     io.to(socket.rooms[keys[i]]).emit("chat message", msg);
  //   }
  // });

  socket.on("disconnect", (socket) => {
    console.log("user disconnected", socket.id);
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

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/messages", messageRouter);
app.use("/api/message/status", messageStatusRouter);
app.use("/api/participants", participantsRouter);

server.listen(PORT, () => {
  console.log(`listening on :${PORT}`);
});
