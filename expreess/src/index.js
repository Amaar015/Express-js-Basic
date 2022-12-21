var express =require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send('Hello from the home in express js ')
})
app.get('/about',(req,res)=>{
    res.send('Hello from the About in express js ')
})
app.get('/contact',(req,res)=>{
    res.send('Hello from the Contact in express js ')
})
app.listen(8000,()=>{
    console.log('Listening from the port 8000');
});