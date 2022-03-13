const express=require('express')
const router=express.Router()
const {addMonument,getMonument,updateMonumentById,deleteMonumentById,getMonumentByCity,getMonumentByPincode,getMonumentByState}=require('../Controller/monumentController')


router.post('/addMonument',addMonument)
router.get('/getMonuments/all',getMonument)
router.put('/Mounument/:id',updateMonumentById)
router.delete('/Monument/:id',deleteMonumentById)
router.get('/MonumentsByCity/:city',getMonumentByCity)
router.get('/MonumentsByPin/:pincode',getMonumentByPincode)
router.get('/MonumentsByState/:state',getMonumentByState)

module.exports=router