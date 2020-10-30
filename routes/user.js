// importing modules  
const express = require('express');  
const router = express.Router();  
    
// importing User Schema  
const User = require('../model/user'); 

//new user post route
router.post('/login', function(req, res) { 
      
  let Users=new User({email: req.body.email}); 
  
    User.register(Users, req.body.password, function(err, user) { 
      if (err) { 
        res.json(err);
        res.json("Success"); 
      } 
    }); 
}); 

//user login
userController.doLogin = function(req, res) { 
  if(!req.body.email){ 
    res.json({success: false, message: "email was not given"}) 
  } else { 
    if(!req.body.password){ 
      res.json({success: false, message: "Password was not given"}) 
    }else{ 
      passport.authenticate('local', function (err, user, info) {  
         if(err){ 
           res.json({success: false, message: err}) 
         } else{ 
          if (! user) { 
            res.json({success: false, message: 'email or password incorrect'}) 
          } else{ 
            req.login(user, function(err){ 
              if(err){ 
                res.json({success: false, message: err}) 
              }else{ 
                const token =  jwt.sign({userId : user._id,  
                   email:user.email}, secretkey,  
                      {expiresIn: '24h'}) 
                res.json({success:true, message:"Authentication successful", token: token }); 
              } 
            }) 
          } 
         } 
      })(req, res); 
    } 
  } 
}; 