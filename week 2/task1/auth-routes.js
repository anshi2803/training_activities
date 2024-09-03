const express= require("express");
const { register, login, changepassword } = require("./auth-contoller");
const authenticate= require('./middleware')
const router=express.Router();

router.post('/register', register)
router.post('/login', login)
router.post('/changepassword', authenticate, changepassword)
module.exports=router;