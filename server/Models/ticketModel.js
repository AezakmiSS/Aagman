const mongoose=require('mongoose')
const ticketSchema=new mongoose.Schema({
    monument:{type:mongoose.Schema.Types.ObjectId,ref:'Monument'},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    numberOfVisitor:{
        type:Number,
        required:true
    },
    visitorIdType:{
        type:String,
        required:true
    },
    VisitorIdNumber:{
        type:Number,
        required:true
    },
    fare:{
        type:Number,
        required:true
    },
})
const Ticket=mongoose.model('Ticket',ticketSchema)
module.exports=Ticket