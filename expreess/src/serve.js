var express =require('express');
var app=express();
var path=require('path');


const staticPath=path.join(__dirname, '../public')

app.use(express.static(staticPath));



app.listen(8000,()=>{
    console.log('Listening from the port 8000');
});