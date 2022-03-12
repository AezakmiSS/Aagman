const visitor =require('../Models/visitorModel')

const addVisitor=async(req,res)=>{
  try{  const Visitor=await visitor.create({
        name:req.body.name,
        age:req.body.name,
        ticket:req.body.Ticket.id,
        monument:req.body.Monument.id
    }) 
       await Visitor.save()
       res.status.json({Visitor})
     }
     catch(error)
     {
         res.staus(202).json({message:error.message})
     }
}

const removeVisitor= async(req,res)=>{
    try{
        visitor.findByIdAndDelete(req.body)
        res.json({message:deleted})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}


