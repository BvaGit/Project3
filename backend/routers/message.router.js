const { Router } = require("express");
const routerMessage = new Router();
const messageController = require("../controllers/message.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerMessage.get(
  "/messages/:chat_id",
  authUserMiddle,
  messageController.getMessagesByChat
);
routerMessage.post("/messages/:chat_id/:id", messageController.createMessage);

module.exports = routerMessage;
