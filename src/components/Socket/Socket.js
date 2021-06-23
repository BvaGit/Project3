import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default socket;

// const socket = () => {
//   const socket = io("http://localhost:3000");
//   // socket.on("rooms", () => {});
//   socket.emit("message", "data");
//   socket.on("message", (data) => {
//     console.log(data);
//   });
// };

// export default socket;
