const express =require('express');
require('dotenv').config()
const dbConfig=require('./config/dbConfig')
const userRoute=require("./routes/userRoute")

const app=express();
app.use(express.json())
const cors=require('cors')
app.use(cors())
app.use('/api/user',userRoute);

const port =process.env.PORT || 5000;
app.listen(port,()=>console.log(`server running on ${port}`))