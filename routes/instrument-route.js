const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user-model')
const Profile = require('../models/profile-model')
const passport = require('passport');


  router.put('/profile/:id', (req,res) => {
    const profileId = req.params.id;
    const instrument = req.body.instrument
    console.log(profileId)
    console.log(req.body)
  
    Profile.findByIdAndUpdate(profileId, {$push:{instruments: instrument}})
    .then(() => {
      console.log(response.data)
      res.json({ message: `${req.params.id}'s new instrument was added.` })
    })
  });
