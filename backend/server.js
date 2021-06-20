const express = require("express");
const userRouter = require("./routers/user.router");
const chatRouter = require("./routers/chat.router");
const messageRouter = require("./routers/message.router");
const messageStatusRouter = require("./routers/message-status.router");
const participantsRouter = require("./routers/participants-router");

const http = require("http");

const PORT = 3000;

const app = express();

const httpServer = http.createServer(app);

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);
  socket.emit("connection", null);

  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on("NEW_CHAT_MESSAGE_EVENT", (data) => {
    io.in(roomId).emit("NEW_CHAT_MESSAGE_EVENT", data);
  });

  socket.on("disconnect", (socket) => {
    console.log("User disconnect", socket.id);
    socket.leave(roomId);
  });
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
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

httpServer.listen(PORT, () => console.log(`server started ${PORT}`));
