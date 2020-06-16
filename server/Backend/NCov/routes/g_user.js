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
  var collection1 = db.get('userList');
  var collection2 = db.get('guserList');
  collection1.find({"username":username},{},function(err,docs){
    if(err == null){
      if(docs.length!=0&&docs[0]['password']==password){
          collection2.find({"username":username},{},function(err2,docs2){
          if(err2 == null){
            if(docs2.length!=0){
              var collection = db.get('volunteerList');
              // collection.find({},{limit:10},function(err1,docs1){
              // 	  console.log(docs1);
              //     res.send(docs1);
              // });
              collection.aggregate([
				  { $limit: 10 },
				  { $lookup: { from: 'userList', localField: 'username', foreignField: 'username', as: 'username' } }
				],function(err1,docs1){
	              	  console.log(docs1);
	                  res.send(docs1);
	           });
            }else res.json("Login failure");
          }else res.json(err);
          

      });
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