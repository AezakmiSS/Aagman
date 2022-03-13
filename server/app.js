const express=require('express')
const app=express()
const cors=require('cors')
const PORT=process.env.PORT||5000
const http=require('http')
const mongoose=require('mongoose')
//Database Setup
const CONNECTION_URL='mongodb://localhost/EntrySystem'


app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())
 

// routes
const monumentRoutes=require('./Routes/monumentRoutes')
const ticketRoutes=require('./Routes/ticketRoutes')
const ticketCheckerRoutes=require('./Routes/ticketCheckerRoutes')
const userRoutes=require('./Routes/userRoutes')


app.get('/', (req,res)=>
{
    res.send('<h1>u r at home page</h1>')
})
app.use(monumentRoutes)
app.use(ticketRoutes)
app.use(userRoutes)
app.use(ticketCheckerRoutes)

//Database Setup

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>app.listen(PORT, ()=>
{
    console.log(`Server is up and running on ${PORT}`)
}))
.catch((error)=>console.log(error))
