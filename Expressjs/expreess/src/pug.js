 
const express=require('express');
const path= require('path');
const app=express();
const port=80;

// console.log()
const StaticPath=path.join(__dirname,'../publics')
const templatePath=path.join(__dirname,'../template')
//  to set view engine
  app.set('view engine','hbs');
//   app.use(express.static(StaticPath))
app.set('views',templatePath);
  // template root 
app.get('/',(req,res)=>{
    res.render('index',{
        name:"ammaar"

    });
});
app.get('/about',(req,res)=>{
    res.render('about',{
        name:"ammaar"

    });
});
  app.get('/',(req,res)=>{
             res.status(200).send('Hello i am from home page')
})



app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
