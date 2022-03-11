const mongoose=require('mongoose')

const timeSchema=new mongoose.Schema({
        startTime: Date,
        endTime: Date,
})
const monumentSchema=new mongoose.Schema({
    monumentName:{
        type:String,
        required:true
    },
    monumentCity:{
        type:String,
        required:true
    },
    monumentPrice:{
        type:Number,
        required:true
    },
    monumentLimit:{
        type:Number,
    },
    monumentWiki:{
        url:String,
    },
    monumentTiming:{
        type:timeSchema,
    },
    monumentVisitor:{
        type:Number,
    }
})

const Monument=mongoose.model('Monument',monumentSchema)
module.exports=Monument