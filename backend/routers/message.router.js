const { Router } = require("express");
const routerMessage = new Router();
const messageController = require("../controllers/message.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerMessage.get(
  "/:chat_id",
  authUserMiddle,
  messageController.getMessagesByChat
);
routerMessage.post("/:chat_id/:id", messageController.createMessage);

module.exports = routerMessage;
