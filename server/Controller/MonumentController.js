const monument=require('../Models/monumentModel.js')

const addMonument= async(req,res)=>{
      const newMonument= new monument({
      monumentId:req.body.monumentId,
      monumentName:req.body.monumentName,
      monumentCity:req.body.monumentCity,
      monumentPrice:req.body.monumentPrice
    })
    try{
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

module.exports ={addMonument,getMonument}