const mongoose=require('mongoose')
const monumentSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    area:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required: true
    },
    pincode:{
       type:Number,
       required: true
    },
    city:{
        type:String,
        required: true
    },
    ticketIndia:{
        type:Number,
        required: true  
    },
    ticketForeign:{
        type:Number,
        required: true
    },
    ticketSaarc:{
       type:Number,
       required: true
    },
    limit:{
        type:Number
    },
    desc:{
        type:String
    },
    openingTime:{
        type:String,
        required: true
    },
    closingTime:{
        type:String,
        required: true
    },
    VisitorCount:[{
        date:Date,
        count:Number
    }]
})

const Monument=mongoose.model('Monument',monumentSchema)
module.exports=Monument