
const router=require('express').Router();
const UserController = require("../controller/user.controller");

//we want to create register api
router.post('/registration',UserController.register);
router.post('/login',UserController.login);

module.exports = router;