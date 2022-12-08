const express = require('express')
const router = express.Router();


//IMPORING CONTROLLER MODULE.
const controller = require('../controller/controller')

router.get('/trial-api' , function(a,b){
    b.send("It is working")
})


//API RELATED TO PROJECT.
router.get('/coinAssets' , controller.cryptocoin);

router.all('/*', function(req,res){
    return res.status(500).send({status:false, message:"Provided route url is wrong"})
})

module.exports = router;