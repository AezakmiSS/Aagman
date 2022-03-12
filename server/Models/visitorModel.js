const mongoose=require('mongoose')

const visitorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    ticket:{type:mongoose.Schema.Types.ObjectId,ref:'Ticket'},
    monument:{type:mongoose.Schema.Types.ObjectId,ref:'Monument'},
})
const Visitor=mongoose.model('Visitor',visitorSchema)
module.exports=Visitor