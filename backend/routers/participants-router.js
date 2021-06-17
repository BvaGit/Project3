const { Router } = require("express");
const routerParticipants = new Router();
const participantsController = require("../controllers/participants.controller");
const authUserMiddle = require("../middleware/authUserMiddle");

routerParticipants.get(
  "/",
  authUserMiddle,
  participantsController.getParticipants
);
routerParticipants.get(
  "/:id",
  authUserMiddle,
  participantsController.getParticipantsById
);
routerParticipants.post(
  "/:chat_id/:id",
  authUserMiddle,
  participantsController.addParticipant
);

module.exports = routerParticipants;
