
const express = require('express');
const { login, logout } = require('../controllers/authController');

 const authRouter = express.Router();

 authRouter.post('/login' , login); //this is registration route

 authRouter.post('/logout' , logout); //this is logout route 

 module.exports = authRouter;  //exporting router