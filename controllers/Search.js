const express = require('express');
const router = express.Router();

const User = require("../models/User")

const Search = router.get("/", function(req, res){
  User
    .find(req.body)
    .exec(function(err, result){
      if (err){
        console.log(err);
      }
      else{
        console.log(result);
        res.send(result);
      }
    });
});

module.exports = router;
