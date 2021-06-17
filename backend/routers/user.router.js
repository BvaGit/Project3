const { Router } = require('express');
const routerUser = new Router();
const userController = require('../controllers/user.controller');
const authUserMiddle = require('../middleware/authUserMiddle');

routerUser.post('/reg', userController.createUser);
routerUser.post('/auth', userController.login);
routerUser.get('/users', authUserMiddle, userController.getUsers);


module.exports =  routerUser;