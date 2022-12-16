 
const { hasSubscribers } = require('diagnostics_channel');
const express=require('express');
const path= require('path');
const app=express();
const port=80;
const hbs=require('hbs');
// console.log()
const StaticPath=path.join(__dirname,'../publics')
const templatePath=path.join(__dirname,'../template/views')
// to add partials section as a file in express js
const partialsPath=path.join(__dirname,'../template/partials');

//  to set view engine
  app.set('view engine','hbs');
//   app.use(express.static(StaticPath))
app.set('views',templatePath);
hbs.registerPartials(partialsPath);
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
app.get('/about/aboutus',(req,res)=>{
                     res.render('aboutus') 
})

app.get('*',(req,res)=>{
       res.render('404',{
        errorcomment:'Opps page dose not exists'
       })
})


app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
