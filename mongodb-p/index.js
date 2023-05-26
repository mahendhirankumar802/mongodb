const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
app.use(express.json());
const surya = require('./scma');
var cors = require('cors')
app.use(cors())

mongoose.connect('mongodb+srv://admin:admin@cluster0.movkhte.mongodb.net/?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected');
    }
})

app.get('/',async(req,res)=>{
     const a =await surya.find();
     res.json(a)
})

app.post('/',async(req,res)=>{
    const a = await surya({
        name:req.body.name
    })
    a.save();
    res.json('data added')
})

app.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const a = await surya.findById(id);

    res.json(a)
})

app.put('/:id',async(req,res)=>{
    const {id}  = req.params;
    const a = await surya.findById(id);
    a.name= req.body.name;
    a.save();
    res.json('data upadeted')
})

app.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    await surya.findByIdAndDelete(id);
    res.json('deleted')
})

app.listen(300,()=>console.log('running'))