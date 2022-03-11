const express=require('express')
const app=express()
const cors=require('cors')
const PORT=process.env.PORT||3000
const http=require('http')




app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())


// routes
const monumentRoutes=require('./Routes/monumentRoutes.js')


app.get('/', (req,res)=>
{
    res.send('<h1>u r at home page</h1>')
})
app.use('/',monumentRoutes)

//Database Setup
const mongoose=require('mongoose')
const CONNECTION_URL='mongodb+srv://Shekhar:CctRzwyrCZYqaJxA@entrydata.npb4p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>app.listen(PORT, ()=>
{
    console.log(`Server is up and running on ${PORT}`)
}))
.catch((error)=>console.log(error))
