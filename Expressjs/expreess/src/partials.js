
const express=require('express');
const path =require('express');
const app=express()
const port=80;
const hbs=require('hbs');

const partialsPath=path.join(__dirname,'../template/partials');
const templatePath=path.join(__dirname,'../template')

app.set('view engine','hbs')
app.set('views',templatePath);

app.listen(port,()=>{
     console.log(`Running on port ${port}`)
})