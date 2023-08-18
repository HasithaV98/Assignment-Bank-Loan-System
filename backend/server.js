const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser");
const cors = require('cors')

const customerRoutes=require("./routes/customerRoutes")
const morgan=require("morgan")

mongoose.connect('mongodb://127.0.0.1:27017/customerDetails',{useUnifiedTopology:true})
const db=mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Database connected')
})

const app=express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())


const PORT=process.env.PORT||8022

app.listen(PORT,()=>{
    console.log(`server port http://localhost:${PORT}`);
})

app.use('/customer',customerRoutes)