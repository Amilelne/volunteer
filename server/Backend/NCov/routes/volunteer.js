var express = require('express');
var cors = require('cors');
var router = express.Router();
var cookieParser = require('cookie-parser');
const fs = require('fs');


var corsOptions = {

  origin:'http://localhost:3000',

  credentials:true

}

router.use(cookieParser());

router.get('/init', cors(corsOptions),function(req, res) {
  var db = req.db;
  var collection = db.get('userList'); 
  if (req.cookies.userID) {
    var userID = req.cookies.userID;
  	collection.find({"_id":userID},{},function(err,docs){
      if (err === null) {
        var friends = docs[0]['friends'];
        var friendIDs = [];
        collection.find({"username":{$in:friends}},{},function(err1,docs1){
          for( i = 0 ; i < docs1.length;++i){
            friendIDs.push(docs1[i]['_id']);
          }
          var returnV  = {username: docs[0]['username'],friends :friends, friendIDs : friendIDs};
          res.json(returnV);
      });
        
      } else res.json(err);
  	});
  }
  else res.json('');
  
});

router.post('/login', cors(corsOptions),function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  
  var db = req.db;
  var collection = db.get('userList');
  collection.find({"username":username},{},function(err,docs){
    if(err == null){
      if(docs.length!=0){
        if(docs[0]['password']==password){
          var milliseconds = 60* 60 * 1000;
          var userID = docs[0]['_id'];
          res.cookie("userID", userID, { maxAge: milliseconds });
          var friends = docs[0]['friends'];
          var friendIDs = [];
          collection.find({"username":{$in:friends}},{},function(err1,docs1){
              for( i = 0 ; i < docs1.length;++i){
                friendIDs.push(docs1[i]['_id']);
              }
              var returnV  = {friends :friends, friendIDs : friendIDs};
              res.send(returnV);
          });
          
          

        }else res.json("Login failure");
      }else res.json("Login failure");
    }else res.json(err);
  });
});

router.get('/logout', cors(corsOptions),function(req, res) {
  // console.log(req.cookies.userID);
  res.clearCookie('userID');
  // res.redirect('/');
  res.send('');
 
});

router.get('/getalbum/:userid', cors(corsOptions),function(req, res) {
  var userid = req.params.userid;
  var db = req.db;
  var collection = db.get('photoList');
  if(userid == 0){
    var userid = req.cookies.userID;
  }
  // console.log(req.cookies.userID);
  collection.find({"userid":userid},{fields:{userid:0}},function(err,docs){
    if (err === null){
      res.json(docs);
    }else res.send(err);
  });
});

router.post('/uploadphoto', cors(corsOptions),function(req, res){
  var crypto = require('crypto');
  var db = req.db;
  var data = (new Date()).toString();
  data = crypto.createHash('md5').update(data).digest("hex");
  var name = data + ".jpg";
  var path =  __dirname+"/../public/uploads/" + name;
  
  req.pipe(fs.createWriteStream(path)).on('finish',function(){
    var collection = db.get('photoList');
    var userid = req.cookies.userID;
    collection.insert({'url':'http://localhost:3002/uploads/'+name, 'userid': userid, 'likedby':[]}, function(err,docs){
      if (err === null){
        res.send({_id:docs["_id"],url:'http://localhost:3002/uploads/'+name,likedby:[]});
      }else res.send(err);
    });
  });
  
  
});

router.delete('/deletephoto/:photoid', cors(),function(req, res){
  var db = req.db;
  var _id = req.params.photoid;
  var collection = db.get('photoList');
  collection.findOneAndDelete({_id:_id},
    function(err,docs){
        if (err === null){
          var path = __dirname+"/../public/uploads/"+docs["url"].substr(30);
          fs.unlink( path, (err)=>{});
          res.json('');
        }else res.json(err);
      });
});

router.put('/updatelike/:photoid', cors(corsOptions),function(req, res){
  var db = req.db;
  var userid = req.cookies.userID;
  var username;
  var _id = req.params.photoid;
  var collection = db.get('userList');
  collection.find({"_id":userid},{},function(err,docs){
    username = docs[0]['username'];
    var collection1 = db.get('photoList');
    collection1.findOneAndUpdate({_id:_id}, { $push: {"likedby":username}}, function (err1, result) {
      res.json(
          (err1 === null) ? { msg: result["likedby"] } : { msg: err }
      );
    });
  });
  

});

/*
 * Handle preflighted request
 */

var allow = ['/uploadphoto','/updatelike/:photoid','/deletephoto/:photoid'];
router.options(allow,cors(corsOptions));



module.exports = router;