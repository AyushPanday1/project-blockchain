const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json());


const route = require('./route/route')

mongoose.connect("mongodb+srv://AyushPanday:AyushPan123@cluster0.eixapeq.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true
})
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.use(route)  

app.listen(3000, function(){
    console.log("Express app is running on port " + 3000)
})
