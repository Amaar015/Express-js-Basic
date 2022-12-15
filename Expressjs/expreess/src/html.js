
const express=require('express');
const path= require('path');
const app=express();
const port=80;

// console.log()
const StaticPath=path.join(__dirname,'../public')
app.use(express.static(StaticPath))
app.get('/',(req,res)=>{
             res.status(200).send('Hello i am from home page')
})



app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})