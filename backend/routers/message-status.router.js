const { Router } = require("express");
const routerMessageStatus = new Router();
const messageController = require("../controllers/message-status-controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerMessageStatus.get(
  "/message/status/:id",
  authUserMiddle,
  messageController.getMessageStatus
);
routerMessageStatus.post(
  "/message/status/:id/:message_id",
  messageController.createMessageStatus
);

module.exports = routerMessageStatus;
