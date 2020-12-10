const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user-model')
const Profile = require('../models/profile-model')
const passport = require('passport');


  router.put('/profile', (req,res) => {
    const profileId = req.params.id;
    const profileWithNewDetails = req.body
  
    Profile.findByIdAndUpdate(profileId, profileWithNewDetails)
    .then(() => {
      res.json({ message: `${req.params.id}'s new instrument was added.` })
    })
  });
