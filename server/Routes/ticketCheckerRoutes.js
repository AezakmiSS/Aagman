const express=require('express')
const router=express.Router()

const {SignUp,login,updatePassword,deleteChecker}=require('../Controller/ticketCheckerController')


router.post('/ticketChecker/login',login)
router.post('/ticektChecker',SignUp)
router.put('/ticketChecker/:email',updatePassword)
router.delete('/ticketChecker/:email',deleteChecker)

module.exports=router