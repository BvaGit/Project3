const { Router } = require("express");
const routerChat = new Router();
const chatController = require("../controllers/chat.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerChat.get("/chat", authUserMiddle, chatController.getChats);
routerChat.get("/chat/:chat_id", authUserMiddle, chatController.getChatsById);
routerChat.post("/chat/:id", chatController.createChat);

module.exports = routerChat;
