const express=require('express');
const app=express();
const path=require('path');
const port =80;
const hbs=require('hbs');

// Path dir for css and images
const staticPath=path.join(__dirname,'../public');
// to add path of handlebars files in template/views file
const templatePath=path.join(__dirname,'../template/views')
// to add path of handlebars partials files in template/partials file
const partialsPath=path.join(__dirname,'../template/partials')
 

// to set static views
app.set('view engine','hbs');
app.use(express.static(staticPath))
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

// use of template files
app.get('/',(req,res)=>{
     res.render('index',{
           name1:'Aijaz Ali'          
     });
})
app.get('/about',(req,res)=>{
     res.render('about',{
          name2:'Ali Haider'          
    });
})
app.get('/contact',(req,res)=>{
     res.render('contact');
})
app.get('*',(req,res)=>{
     res.render('404',{
          errorcomment:'Opps page dose not found'
     });
})

app.listen(port,()=>{
            console.log(`Listening from the ${port}`);
})