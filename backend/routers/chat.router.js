const { Router } = require("express");
const routerChat = new Router();
const chatController = require("../controllers/chat.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerChat.get("/", authUserMiddle, chatController.getChats);
routerChat.get("/:user_id", authUserMiddle, chatController.getChatById);
routerChat.post("/create_chat", chatController.createChat);

module.exports = routerChat;
