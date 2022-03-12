const ticket=require('../Models/ticketModel')
const monument=require('../Models/monumentModel')
const user=require('../Models/userModel')

const createTicket= async(req,res)=>{
    try{
        const Monument=await monument.findById(req.body.monumentId)
        const User=await user.findById(req.body.userId)
        const newTicket =await ticket.create({
           monument:Monument,
           user:User,
           numberOfvisitor:req.body.numberOfvisitor,
           visitorIdType:req.body.visitorIdType,
           visitorIdNumber:req.body.visitorIdNumber,
           fare:req.body.fare
        })
        await user.tickets.push(newTicket)
        await newTicket.save()
        res.status(200).json(newTicket)
    }
    catch(error){
      res.status(404).json({message:error.message})
    }
}


const getTicketById=async(req,res)=>{
  try{
    const User=await user.tickets.findById(req.body)
    res.status(200).json({User})
  }
  catch(error)
  {
    res.status(404).json({message:error.message})
  }
}

module.exports={createTicket,getTicketById}