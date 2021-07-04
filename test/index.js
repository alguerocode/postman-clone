const express = require('express');
const cors = require('cors');


const app = express();

// middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// listening 
app.listen(8080,() =>{
  console.log('app listening in port 8080');
});

// routes
app.get('/',(req, res) =>{
  console.log(req.body);
  res.status(200).json(req.body);
})

app.post('/',(req, res) =>{
  console.log(req.body);
  res.status(200).json(req.body);
})

app.delete('/',(req, res) =>{
  console.log(req.body);
  res.status(200).json(req.body);
})

app.put('/',(req,res) =>{
  console.log(req.body);
  res.json('hey there');
})

