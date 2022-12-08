const express = require('express')
const mongoose = require('mongoose')
const app = express()

const route = require('./route/route')

app.use(express.json())

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://AyushPanday:AyushPan123@cluster0.eixapeq.mongodb.net/test",{
    useNewUrlParser : true
})
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.use('/',route)

app.listen(3000 , function(){
    console.log("Running on the port " , 3000);
})