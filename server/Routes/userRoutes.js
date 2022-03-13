const express=require('express')
const {createUser, getUserById, getAllUsers, deleteUserById, editUser, loginUser} = require('../Controller/userController')
const router=express.Router()

router.get('/users', getAllUsers)

router.get('/user/:id', getUserById)

router.post('/user', createUser)

router.post('/user/login', loginUser)

router.put('/user/:id', editUser)

router.delete('/user/:id', deleteUserById)


module.exports=router