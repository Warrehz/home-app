// for routing purposes
const express = require("express");
// Requiring our Client model
const User  = require("../models/User");
// relates the model to mongodb
const mongoose = require("mongoose");
// creates a router
const router  = express.Router();

router.get("/profile/:id", function(req, res){
  User.find({where: {_id: req.params.id}}).exec(function(err, result){
    if (err) throw res.status(500).send(err);
    
    console.log(result);  
  });
});

router.post("/login", function(request, results) {

})
// route for adding new user to the database
router.post("/sign-up", function(request, results) {
  console.log(request.body)
  User.findOne({
    where: {_id: request.body._id}
  }).then(function(users) {

    if (users) {
      console.log(users);
      results.send("That user already exists.");
    } else {

      User.create({
        name: request.body.name,
        username: request.body.username,
        password: request.body.password,
        city: request.body.city,
        state: request.body.state,
        phoneNumber: request.body.phoneNumber
      })
      .then(function(user) {

        results.send(user);

      })
    }
  })
});

router.put("/create-service", function(request, results) {
 console.log(request.body)
 User.findOne({
   where: {_id: request.body._id}
 }).then(function(users) {

   if (users) {
     console.log(users);
     results.send("That user already exists.");
   } else {

     User.update({
       serviceOffered: request.body.checkedItem
     })
     .then(function(user) {

       results.send(user);

     })
   }
 })
});


module.exports = router;
