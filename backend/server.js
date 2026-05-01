import express from 'express';
import morgan from 'morgan';
import cors from "cors";

const app=express();

app.use(express.json());
app.use(morgan('dev'));

app.get("/api/health",(req,res)=>
{res.status(201).json({status:"Ok"})});

app.get("/api/hello",(req,res)=>{
    res.status(201).json({message:"Hello World"});
})

app.get("/api/users",(req,res)=>{
    const users=[
        {name:"OM",age:29},
        {name:"Shom",age:13},
        {name:"Bhuvam",age:15},
        {name:"Harsh",age:21}
    ]
    res.status(201).json({
        message:"User Fetch Successfully",
        users
    })
})

app.listen(3000,()=>{
    console.log("Server is running on Port no.3000");
})