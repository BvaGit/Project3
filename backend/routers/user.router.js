const { Router } = require("express");
const multer = require("multer");
const routerUser = new Router();
const userController = require("../controllers/user.controller");
const authUserMiddle = require("../middleware/authUserMiddle");
const uploadImg = require("../middleware/uploadImg");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "avatar");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const mult = multer({ storage });

routerUser.post("/reg", userController.createUser);
routerUser.post("/auth", userController.login);
routerUser.put("/myaccount/:id", userController.postOrUpdateMyAccount);
routerUser.put(
  "/myaccount/avatar/:id",
  mult.single("file"),
  uploadImg,
  userController.uploadAvatar
);
routerUser.get("/myaccount/getavatar/:id", userController.getAvatar);
routerUser.get("/getmyaccount", authUserMiddle, userController.getMyAccount);
routerUser.put("/updatelogpass/:id", userController.updateLoginOrPassword);
routerUser.get("/users", authUserMiddle, userController.getUsers);
routerUser.get("/addtoken", authUserMiddle, userController.addToken);

module.exports = routerUser;
