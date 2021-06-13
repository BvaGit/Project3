const { Router } = require('express');
const routerUser = new Router();
const userController = require('../controllers/user.controller');
const authUserMiddl = require('../middlewaree/authUserMiddl');


routerUser.post('/reg', userController.createUser);
routerUser.post('/auth', userController.getUserByLoginAndPassword);
routerUser.get('/users', authUserMiddl, userController.getUser);


module.exports =  routerUser;