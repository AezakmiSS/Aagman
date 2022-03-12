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
    age:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    tickets:[{
      type:mongoose.Schema.Types.ObjectId,ref:'Ticket'
    }],
    password:{
        type:String,
        required:true
    },
    address:{
        area:String,
        country:String
    }
})

const User=mongoose.model('User',userModel)
module.exports=User