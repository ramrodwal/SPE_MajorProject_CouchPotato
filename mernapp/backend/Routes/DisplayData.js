const express = require('express')
const router = express.Router()

router.post('/food-data', (req, res)=>{
  try {
    //global variable ko kahi bhi access kr sakte hai
    res.send([global.flours, global.item_category])
    c
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
})

module.exports = router;