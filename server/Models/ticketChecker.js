const mongoose=require('mongoose')

const ticketCheckerSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

const TicketChecker=mongoose.model('TicketChecker',ticketCheckerSchema)
module.exports=TicketChecker