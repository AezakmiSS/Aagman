const monument=require('../Models/monumentModel')

const addMonument= async(req,res)=>{
     try{
        const newMonument=await monument.create({
            name:req.body.name,
            address:req.body.address,
            city:req.body.city,
            area:req.body.area,
            pincode:req.body.pincode,
            state:req.body.state,
            ticketIndia:req.body.ticketIndia,
            ticketForeign:req.body.ticketForeign,
            ticketSaarc:req.body.ticketSaarc,
            limit:req.body.limit,
            desc:req.body.desc,
            openingTime:req.body.openingTime,
            closingTime:req.body.closingTime,
         })
    await newMonument.save();
        res.status(201).json(newMonument)
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}
const getMonument= async(req,res)=>{
    try{
        const monumentModels= await monument.find()
        res.status(201).json(monumentModels)
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}
const updateMonumentById=async(req,res)=>{
   try{
     const Monument= await monument.findByIdAndUpdate(req.params.id,req.body,{new:true,upsert:true})
     res.status(202).json(Monument)
   }
   catch(error)
   {
      res.status(403).json({message:error.message})
   }
}
const deleteMonumentById=async(req,res)=>
{
   try{
       const Monument=await monument.findByIdAndDelete(req.param.id)
       res.json(200).json(Monument)
   }
   catch(error){
       res.status(404).json({message:error.message})
   }
}

const getMonumentByCity=async(req,res)=>{
    try{
        const Monument=await monument.find({city:req.body.city})
        res.status(200).json(Monument)
    }
    catch(error)
    {
        res.json(404).json({message:error.message})
    }
}


const getMonumentByPincode=async(req,res)=>
{
    try{
        const Monument=await monument.find({pincode:req.body.pincode})
        res.status(202).json(Monument)
    }
    catch(error)
    {
        res.status(404).json({message:error.message})
    }
}

const getMonumentByState=async(req,res)=>{
    try{
        const Monument=await monument.find({state:req.body.state})
        res.status(200).json(Monument)
    }
    catch(error)
    {
        res.status(404).json({message:error.message})
    }
}



module.exports ={addMonument,getMonument,updateMonumentById,deleteMonumentById,getMonumentByCity,getMonumentByPincode,getMonumentByState}