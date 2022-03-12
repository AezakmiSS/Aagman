const express=require('express')
const router=express.Router()

const {createTicket,getTicketById} =require('../Controller/ticketController')

router.put('/ticket',createTicket)
router.get('/getticket/:id',getTicketById)

module.exports=router