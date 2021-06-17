const { Router } = require("express");
const routerChat = new Router();
const chatController = require("../controllers/chat.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerChat.get("/", authUserMiddle, chatController.getChats);
routerChat.get("/:chat_id", authUserMiddle, chatController.getChatById);
routerChat.post("/:id", chatController.createChat);

module.exports = routerChat;
