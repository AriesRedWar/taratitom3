const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
//require bcrypt to hash passwords
const bcrypt = require('bcrypt')

router.get("/", (req, res) => {
  console.log("WE SMACKED THE GET ROUTER /Users !!!");
  User.find()
    .then((foundUser) => {
      res.json(foundUser); //res.render
    })
    .catch((err) => {
      console.log(err);
      res.json("error404");
    });
});


router.post('/', async (req, res) => {
  console.log("Are you even working bro? New User", req.body);
  const { password, ...rest } = req.body
  const passwordDigest = await bcrypt.hash(password, 12)
  const user = { ...rest, password: passwordDigest }
  try {
    const foundUser = await User.create(user)
    res.status(200).json(foundUser)
  } catch (e) {
    res.status(404).json({ message: "Could not create user" })
  }

})

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

//FIND USER BY ID
router.get("/:id", async (req, res) => {

  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router