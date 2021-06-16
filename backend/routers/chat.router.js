const { Router } = require("express");
const routerChat = new Router();
const chatController = require("../controllers/chat.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

// routerChat.post("/chat", chatController.createChat);
routerChat.get("/chat", authUserMiddle, chatController.getChats);
routerChat.get("/chat/:chat_id", authUserMiddle, chatController.getChatsById);

module.exports = routerChat;
