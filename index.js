const express =require('express')
const path=require('path')
const hbs=require('hbs')
const bodyParser=require('body-parser')

// express instance
const app=express();


//bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
// custom instance variable
const frontRoute= require('./route/front.route')




//hbs instance 
app.set('view engine','hbs')
hbs.registerPartials(path.join(__dirname,'./','views/partials'))
app.use(express.static(path.join(__dirname, './', 'public')))


// port define
const PORT=process.env.PORT || 8000
//server instance

// console.log(frontRoute);
app.use(frontRoute)

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})

