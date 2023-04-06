const express = require('express')
const router = express.Router()
const user = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/createUser", [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  // password must be at least 5 chars long
  body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    await user.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location
    })
    res.json({ success: true });

  } catch (error) {
    console.log("there is an error");
    res.json({ success: true });
  }

})


router.post("/loginuser", [
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;

  try {

    let userData = await user.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: "email not registered" });
    }

    if (req.body.password !== userData.password) {
      return res.status(400).json({ errors: "incorrect password" });
    }

    else {
      res.json({ success: true });
    }


  } catch (error) {
    console.log("there is an error");
    res.json({ success: false });
  }

})

module.exports = router;