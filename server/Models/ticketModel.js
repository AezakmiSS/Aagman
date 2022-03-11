const mongoose=require('mongoose')
const ticketSchema=new mongoose.Schema({
    ticketId:{
        type:String,
        required:true,
        unique:true,
    },
    ticketMonumentId:{
        type:String,
        required:true,
    },
    ticketPeople:{
       type:[Schema.Types.ObjectId],
       ref:tourist,
    },
    ticketfare:{
        type:Number,
        required:true,
    },
    ticketDateTime:{
        type:[]
    }
})

const Ticket=mongoose.model('Ticket',ticketSchema)
module.exports=Ticket