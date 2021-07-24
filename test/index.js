const express = require('express');
const cors = require('cors');


const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }))

// lestening 

app.listen(3000);

// basic test 
app.get("/", (req,res) =>{
    res.status(200).send("it's work");
})


app.post("/", (req,res) =>{
    res.status(201).send("it's work");
})


app.delete("/", (req,res) =>{
    res.status(200).send("it's work");
})

app.put("/", (req,res) =>{
    res.status(201).send("it's work");
})


// basic test with data sending

app.get("/test", (req,res) =>{
    res.status(200).json({name:"myName",age:30})
})


app.post("/test", (req,res) =>{
    res.status(300).json({redirect:true});
})


app.delete("/test", (req,res) =>{
    res.status(404).json("not allowed");
})

app.put("/test", (req,res) =>{
    res.status(200).send({message:"your welcome"});
})

