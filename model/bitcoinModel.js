const mongoose = require('mongoose');

const schema = mongoose.Schema({
    symbol:{
        type:String,
        unique:true
    },
    name: { 
        type:String ,
        Unique :true
    },
    marketCapUsd: {
        type: String
    } ,
    priceUsd: {
        type: String
    }},
    {timestamps:true})

module.exports = mongoose.model('schema' , schema)