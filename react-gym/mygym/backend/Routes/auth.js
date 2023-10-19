const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

router.post('/', [
   body('name', 'Please fill this field').notEmpty(),
   body('name', 'Minimum length must be 3').isLength({ min: 3 }),
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'Minimum length must be 5').isLength({ min: 5 })
], async (req, res) => {
 
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
         return res.status(400).json({ message: "Sorry, user already exists!" });
      }

      user = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
      });

      // Respond with the created user or any additional information if needed
      res.status(200).json(user);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
   }
});



//For login 
router.post('/login', [
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'Password must be at least five characters').isLength({ min: 5 }),
], async (req, res) => {

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   const { email, password } = req.body;

   try {
      // Find user by email
      let user = await User.findOne({ email });


      if (!user) {
         return res.status(400).json({ message: "Invalid credentials. Enter valid email!" });
      }

      // Check password
      // const passwordCheck = await bcrypt.compare(password, user.password);

      if (user.password !== req.body.password) {
         return res.status(400).json({ message: "Invalid credentials. Enter correct password!" });
      }
      

      // If credentials are valid, send a success message
      res.json({ message: "User logged in successfully" });

   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
   }
});
module.exports = router;
