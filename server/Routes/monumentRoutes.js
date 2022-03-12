const express=require('express')
const router=express.Router()
const {addMonument,getMonument,updateMonumentById,deleteMonumentById,getMonumentByCity,getMonumentByPincode,getMonumentByState}=require('../Controller/monumentController')


router.post('/addMonument',addMonument)
router.get('/getMonuments/all',getMonument)
router.put('/Mounument/:id',updateMonumentById)
router.delete('/Monument/:id',deleteMonumentById)
router.get('/Monuments/:city',getMonumentByCity)
router.get('/Monuments/:Pincode',getMonumentByPincode)
router.get('/Monuments/:State',getMonumentByState)

module.exports=router