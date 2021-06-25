// const express = require("express");
// const userRouter = require("./routers/user.router");
// const chatRouter = require("./routers/chat.router");
// const messageRouter = require("./routers/message.router");
// const messageStatusRouter = require("./routers/message-status.router");
// const participantsRouter = require("./routers/participants-router");

// const http = require("http");

// const PORT = 3000;

// const app = express();

// const httpServer = http.createServer(app);

// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: "*",
//   },
// });

// // const broadcast = (data, socket) => {
// //   io.clients.forEach((client) => {
// //     // send for everyone except author
// //     if (client.readyState === io.OPEN && client !== socket) {
// //       client.send(JSON.stringify(data));
// //     }
// //   });
// // };

// io.on("connection", (socket) => {
//   console.log("User connected, socket.id:", socket.id);
//   socket.emit("connection", null);

//   // const { roomId } = socket.handshake.query;
//   // socket.join(roomId);

//   // socket.on("NEW_CHAT_MESSAGE_EVENT", (data) => {
//   //   io.in(roomId).emit("NEW_CHAT_MESSAGE_EVENT", data);
//   // });

//   socket.on("chat message", (msg) => {
//     console.log("message: " + msg);
//     io.emit("chat message", msg);
//     fetch("http://localhost:3000", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: msg,
//       }),
//     });
//   });

//   socket.on("disconnect", (socket) => {
//     console.log("User disconnect", socket.id);
//     // socket.leave(roomId);
//   });
// });

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   next();
// });

// app.use(express.json());

// app.use("/api/user", userRouter);
// app.use("/api/chat", chatRouter);
// app.use("/api/messages", messageRouter);
// app.use("/api/message/status", messageStatusRouter);
// app.use("/api/participants", participantsRouter);

// httpServer.listen(PORT, () => console.log(`server started ${PORT}`));

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
    db.createSocketMessage(JSON.parse(msg))
      .then((data) => {
        emitMostRecentMessages(data);
      })
      .catch((err) => {
        io.emit(err);
        console.log("ERRRROR???");
      });
  });

  socket.on("disconnect", (socket) => {
    console.log("user disconnected", socket.id);
  });
});

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
