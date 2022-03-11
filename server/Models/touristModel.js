const mongoose=require('mongoose')
const touristSchema=new mongoose.Schema({
    touristId:{
        type:String,
        requried:true,
    },
   ticketId:{
       type:String,
       required:true,
   },
   touristCompanion:{
       type:Schema.Types.ObjectId,
       ref:tourist,
   },
   touristSex:{
       type:String,
       required:true,
   },
   touristMobile:{
       type:Number,
   },
   touristEmail:{
       type:String,
   },
})

const Tourist=mongoose.model('Tourist',touristSchema)
module.exprots=Tourist