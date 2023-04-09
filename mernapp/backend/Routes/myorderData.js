const express = require('express')
const router = express.Router()
const Order = require('../models/Orders')

router.post('/myorderData', async(req, res) =>{
    try{
        console.log('helloooooo')
        let myData= await Order.findOne({'email': req.body.email})
        res.json({orderData: myData})
    }catch(error){
        res.send("this is Server Error", error.message)
    }
    })


    module.exports = router;