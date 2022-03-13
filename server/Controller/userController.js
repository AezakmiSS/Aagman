const User=require('../Models/userModel')

const createUser=async (req, res)=>
{
    try{
        const tempUser=new User({
            name: req.body.user.displayName,
            email: req.body.user.email,
            address:req.body.address?req.body.address:{},
            phone:req.body.user.phone,
            tickets:[],
            userType:req.body.userType
        })

        console.log("user",tempUser)

        const savedUser=await tempUser.save()

        return res.json(savedUser)
    }
    catch(error)
    {
        console.log(error)
        res.status(400).json(error)
    }
}

const loginUser=async (req, res)=>
{
    try{

        const worker = await User.findOne({email:req.body.user.email})
        console.log("worker",worker)

       if(!worker)createUser(req,res);
       else res.status(200).json(worker)
    }
    catch(error)
    {
        console.log(error)
        res.status(400).json(error)
    }
}

const getUserById=async (req, res)=>
{
    try{
        const User=await User.findById(req.params.id).populate('healthLogs').populate('appointments')
        return res.json(User)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json(error)
    }
}


const getAllUsers=async (req, res)=>
{
    try{
        const Users=await User.find()
        return res.json(Users)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json(error)
    }
}

const deleteUserById=async (req, res)=>
{
    try{
        const deletedUser=await User.findByIdAndDelete(req.params.id)
        return res.json(deletedUser)
    }
    catch(error)
    {
        console.log(error)
        res.status(403).json(error)
    }
}


const editUser=async (req, res)=>
{
    try{
        const User=await User.findByIdAndUpdate(req.params.id, req.body, {new: true, upsert: true})
        return res.json(User)
    }
    catch(error)
    {
        console.log(error)
    }
}
module.exports={createUser, getUserById, getAllUsers, deleteUserById, editUser, loginUser}

