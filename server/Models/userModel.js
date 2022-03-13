const mongoose=require('mongoose')

const userModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    },
    tickets:[{
      type:mongoose.Schema.Types.ObjectId,ref:'Ticket'
    }],
    address:{
        area:String,
        country:String
    },
    userType:{
        type:String
    }
})

const User=mongoose.model('User',userModel)
module.exports=User