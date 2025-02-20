const express= require("express")
const cors= require("cors")
const server=express()
const mongoose=require("mongoose")
require("dotenv").config()
const blog=require("./models/blogSchema")

const port=process.env.PORT
const mongo_url=process.env.mongo_url
server.use(cors())
server.use(express.json())
mongoose.connect(mongo_url).then(()=>{console.log("connected")}).catch((err)=>{console.log("error",err)})

const router=require("./Routes/blogrouter");
server.use('/api/blogs',router);


server.listen(5000,()=>{console.log("server started")});