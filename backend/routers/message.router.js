const { Router } = require("express");
const routerMessage = new Router();
const messageController = require("../controllers/message.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerMessage.get(
  "/messages/:chat_id",
  authUserMiddle,
  messageController.getMessagesByChat
);
routerMessage.post("/messages", messageController.createMessage);

module.exports = routerMessage;
