var express = require('express');
var cors = require('cors');
var router = express.Router();
const fs = require('fs');


var corsOptions = {

  origin:'http://localhost:3000',

  credentials:true

}

router.post('/login', cors(corsOptions),function(req, res) {
  // return volunteerList if success
  // Maximum return 10
  var username = req.body.username;
  var password = req.body.password;
  
  var db = req.db;
  var collection = db.get('volunteerList');
  collection.find({"username":username},{},function(err,docs){
    if(err == null){
      if(docs.length!=0){
        if(docs[0]['password']==password){
          collection.find({},{}).limit(10,function(err1,docs1){
              res.send(docs1);
          });
          
          

        }else res.json("Login failure");
      }else res.json("Login failure");
    }else res.json(err);
  });
});

router.get('/logout', cors(corsOptions),function(req, res) {
  res.send("logout");
 
});



/*
 * Handle preflighted request
 */

var allow = ['/uploadphoto','/updatelike/:photoid','/deletephoto/:photoid'];
router.options(allow,cors(corsOptions));



module.exports = router;