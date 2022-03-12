const ticketChecker=require('../Models/ticketChecker')

const login=async(req,res)=>{
    console.log('login implementation for the ticketChecker')
    res.json({"message":"implement the login for TC."})
}
const SignUp=async(req,res)=>{
    console.log('Signup implementation for the ticketChecker')
    res.json({"message":"implement the SignUp for TC."})
}

const updatePassword=async(req,res)=>{
    try{
        console.log('implement logic for updation of id and pass')
    }
    catch(error)
    {
        res.status.json({message:error.message})
    }
}

const deleteChecker=async(req,res)=>{
    try{
        const checker=await ticketChecker.find({email:req.body})
        ticketChecker.deleteOne(checker)
    }
    catch(error)
    {
        res.status.json({message:error.message})
    }
}


module.exports={SignUp,login,updatePassword,deleteChecker}