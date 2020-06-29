var express = require('express');
var cors = require('cors');
var router = express.Router();
const fs = require('fs');
var response;

var corsOptions = {

  origin: 'http://localhost:3000',

  credentials: true

}

// --------------------------------------------------------------------------------------------------------------------
// USER BEHAVIORS:
// LOGIN, LOGOUT

router.post('/login', cors(corsOptions), async function (req, res) {
  // return demandList if success
  var username = req.body.username;
  var password = req.body.password;

  var db = req.db;
  var collection1 = db.get('userList');
  var collection2 = db.get('guserList');

  verify(req, username, password).then(() => {
    setTimeout(function () {
      if (response == true) {
        var collection = db.get('demandList');
        collection.find({},{},function (err1, docs1) {
          console.log(docs1);
          res.send(docs1);
        });
      } else res.json("Login failure");
    }, 50);

  });
});
router.get('/logout', cors(corsOptions), function (req, res) {
  res.send("logout");

});


// --------------------------------------------------------------------------------------------------------------------
// MANAGE NEED:
// ADD, EDIT, VIEW, DELETE

router.post('/addNeed', cors(corsOptions), async function (req, res) {
  // get info
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;
  // var volusername = req.body.volusername;
  var type = req.body.type;
  var descript = req.body.descript;

  verify(req, username, password).then(() => {
    setTimeout(function () {
      if (response == true) {
        var collection = db.get('needList');
        collection.insert({
            username: username,
            type: type,
            description: descript,
          },
          function (err, result) {
            res.json("Need is added successfully");
          }
        );
      } else res.json("Authentication Failure");
    }, 50);
  });


});


// State and Creation Date cannot be edited
router.post('/editNeed', cors(corsOptions), async function (req, res) {
  // get info
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;
  var type = req.body.type;
  var descript = req.body.descript;
  var _id = req.body._id;


  verify(req, username, password).then(() => {
    setTimeout(function () {
      if (response == true) {
        var collection = db.get('needList');
        collection.update({
            _id: _id,
            username: username
          }, {
            $set: {
              type: type,
              description: descript
            }
          },
          function (err, result) {
            res.json("Need is edited successfully");
          }
        );
      } else res.json("Authentication Failure");
    }, 50);
  });


});


router.post('/viewNeeds', cors(corsOptions), async function (req, res) {
  // get info
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;


  verify(req, username, password).then(() => {
    setTimeout(function () {
      console.log("returned");
      console.log(response);
      if (response == true) {
        var collection = db.get('needList');
        collection.find({
          username: username
        }, function (err1, docs1) {
          console.log(docs1);
          res.send(docs1);
        });
      } else res.json("Authentication Failure");
    }, 50);
  });


});

router.delete('/deleteNeed', cors(corsOptions), async function (req, res) {
  // get info
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;
  var _id = req.body._id;


  verify(req, username, password).then(() => {
    setTimeout(function () {
      console.log("returned");
      console.log(response);
      if (response == true) {
        var collection = db.get('needList');
        collection.remove({
            _id: _id,
            username: username
          },
          function (err, result) {
            res.json("Need is deleted successfully");
          }
        );
      } else res.json("Authentication Failure");
    }, 50);
  });


});


// --------------------------------------------------------------------------------------------------------------------
// Utilities:
// VERIFY
async function verify(req, username, password) {
  var db = req.db;
  var collection1 = db.get('userList');
  var collection2 = db.get('volunteerList');
  collection1.find({
    "username": username
  }, {}, function (err, docs) {
    if (err == null) {
      console.log(docs);
      console.log(username);
      if ((docs.length != 0) && docs[0]['password'] === password) {
        console.log("2");
        collection2.find({
          "username": username
        }, {}, function (err2, docs2) {
          if (err2 == null) {
            if (docs2.length != 0) {
              response = true;
            } else {
              response = false
            };
          } else {
            response = false
          };
        });
      } else {
        response = false
      };
    } else {
      responses = false
    };
  });


}


module.exports = router;