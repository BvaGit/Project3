const { Router } = require("express");
const routerMessage = new Router();
const messageController = require("../controllers/message.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerMessage.get("/:chat_id", authUserMiddle, messageController.getMessages);
routerMessage.post("/create_message", messageController.createMessage);

module.exports = routerMessage;
