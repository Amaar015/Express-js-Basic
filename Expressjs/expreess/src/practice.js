
const express=require('express');
const app=express();
const port=8000;

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Hello from the Home Page and I am Amaar</h1>')
});
app.get('/about',(req,res)=>{
    res.status(200).send('<h1>Hello from the About Page and I am Amaar</h1>')
});
app.get('/contact',(req,res)=>{
    res.status(200).send('<h1>Hello from the Contact Page and I am Amaar</h1>')
});
app.get('/this',(req,res)=>{
    res.status(400).send('<h1>404 Error Page</h1>')
});

app.listen(port,()=>{
    console.log(`listen from the port no ${port}`)
})