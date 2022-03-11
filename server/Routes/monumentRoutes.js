const express=require('express')
const router=express.Router()
const{ getMonument,addMonument}=require('../Controller/MonumentController')


router.get('/getAllMonument',getMonument)

router.post('/addMonument',addMonument)

module.exports =router
