const { Router } = require('express');
const routerUser = new Router();
const userController = require('../controllers/user.controller');
const authUserMiddl = require('../middlewaree/authUserMiddle');


routerUser.post('/reg', userController.createUser);
routerUser.post('/auth', userController.login);
routerUser.get('/users', authUserMiddl, userController.getUsers);


module.exports =  routerUser;