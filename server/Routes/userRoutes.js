const express=require('express')
const { Signup,login,updatePassword } = require('../Controller/userController')
const router=express.Router()

router.post('/user',Signup)
router.post('/user/login',login)
router.put('/user/:id',updatePassword)

module.exports=router