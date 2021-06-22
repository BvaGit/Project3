const { Router } = require('express');
const routerUser = new Router();
const userController = require('../controllers/user.controller');
const authUserMiddle = require('../middleware/authUserMiddle');

routerUser.post('/reg', userController.createUser);
routerUser.post('/auth', userController.login);
routerUser.put('/myaccount/:id', userController.postOrUpdateMyAccount);
routerUser.put('/updatelogpass/:id', userController.updateLoginOrPassword);
routerUser.get('/users', authUserMiddle, userController.getUsers);
routerUser.get('/addtoken',authUserMiddle, userController.addToken);


module.exports =  routerUser;