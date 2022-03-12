const user=require('../Models/userModel')


const login=async(req,res)=>{
    // console.log('login implementation for the ticketChecker')
    res.json({"message":"implement the login for TC."})
}
const SignUp=async(req,res)=>{
    // console.log('Signup implementation for the ticketChecker')
    res.json({"message":"implement the SignUp for TC."})
}

const updatePassword=async(req,res)=>{
    try{
        // console.log('implement logic for updation of id and pass')
        res.status(200).json({"message":"implementLogic"})
    }
    catch(error)
    {
        res.status.json({message:error.message})
    }
}

module.exports={login,SignUp,updatePassword}