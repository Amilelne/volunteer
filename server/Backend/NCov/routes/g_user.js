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
// LOGIN, LOGOUT, REGISTER

router.post('/login', cors(corsOptions), async function (req, res) {
	// return volunteerList if success
	// Maximum return 10
	var username = req.body.username;
	var password = req.body.password;

	var db = req.db;
	var collection1 = db.get('userList');
	var collection2 = db.get('guserList');

	verify(req, username, password).then(() => {
		setTimeout(function () {
			if (response == true) {
				var collection = db.get('volunteerList');
				var collection3 = db.get('needList');
				collection.aggregate([{
					$lookup: {
						from: 'userList',
						localField: 'username',
						foreignField: 'username',
						as: 'username'
					}
				}, {
					$unwind: {
						path: "$username",
						preserveNullAndEmptyArrays: false
					}
				}, {
					$lookup: {
						from: "needList",
						localField: "volunteerList.username",
						foreignField: "needList.username",
						as: "username1"
					}
				}, {
					$unwind: {
						path: "$username1",
						preserveNullAndEmptyArrays: false
					}
				}, {
					$limit: 10
				}], function (err1, docs1) {
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

router.post('/register', cors(corsOptions), async function (req, res) {
	// get info
	var db = req.db;
	var username = req.body.username;
	var password = req.body.password;
	var phone = req.body.phone;
	var email = req.body.email;
	
	var collection = db.get('userList');
		collection.find({
			username: username
		},function (err1, docs1) {
			if(docs1.length==0){
				collection.insert({username:username, password:password,phone:phone,email:email},function (err1, docs1) {
					var collection1 = db.get('guserList');
					collection1.insert({username:username, password:password},function (err1, docs1) {
						res.json("success");
					});				
				});
			}else{
				res.json("Failure: username is used");
			}
		});


});

// --------------------------------------------------------------------------------------------------------------------
// MANAGE DEMAND:
// ADD, EDIT, VIEW, DELETE, COMMENT

router.post('/addDemand', cors(corsOptions), async function (req, res) {
	// get info
	var db = req.db;
	var username = req.body.username;
	var password = req.body.password;
	// var volusername = req.body.volusername;
	var type = req.body.type;
	var descript = req.body.descript;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;


	verify(req, username, password).then(() => {
		setTimeout(function () {
			if (response == true) {
				var collection = db.get('demandList');
				collection.insert({
						gusername: username,
						// volusername: volusername, 
						state: "Waiting",
						type: type,
						description: descript,
						creation_date: today
					},
					function (err, result) {
						res.json("Demand is added successfully");
					}
				);
			} else res.json("Authentication Failure");
		}, 50);
	});


});


// State and Creation Date cannot be edited
router.post('/editDemand', cors(corsOptions), async function (req, res) {
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
				var collection = db.get('demandList');
				collection.update({
						_id: _id,
						gusername: username,
						state: {
							$ne: "Finish"
						}
					}, {
						$set: {
							type: type,
							description: descript
						}
					},
					function (err, result) {
						res.json("Demand is edited successfully");
					}
				);
			} else res.json("Authentication Failure");
		}, 50);
	});


});


router.post('/viewDemands', cors(corsOptions), async function (req, res) {
	// get info
	var db = req.db;
	var username = req.body.username;
	var password = req.body.password;


	verify(req, username, password).then(() => {
		setTimeout(function () {
			console.log("returned");
			console.log(response);
			if (response == true) {
				var collection = db.get('demandList');
				collection.find({
					gusername: username,
					state: {
						$ne: "Finish"
					}
				}, function (err1, docs1) {
					console.log(docs1);
					res.send(docs1);
				});
			} else res.json("Authentication Failure");
		}, 50);
	});


});

router.delete('/deleteDemand', cors(corsOptions), async function (req, res) {
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
				var collection = db.get('demandList');
				collection.remove({
						_id: _id,
						gusername: username,
						state: {
							$ne: "Finish"
						}
					},
					function (err, result) {
						res.json("Demand is deleted successfully");
					}
				);
			} else res.json("Authentication Failure");
		}, 50);
	});


});

router.post('/commentOnDemand', cors(corsOptions), async function (req, res) {
	// get info
	var db = req.db;
	var username = req.body.username;
	var password = req.body.password;
	var _id = req.body._id;
	var comment = req.body.comment;


	verify(req, username, password).then(() => {
		setTimeout(function () {
			console.log("returned");
			console.log(response);
			if (response == true) {
				var collection = db.get('demandList');
				collection.update({
						_id: _id,
						gusername: username,
						state: "Finish"
					}, {
						$set: {
							comment: comment
						}
					},
					function (err, result) {
						res.json("Demand is commented");
					}
				);
			} else res.json("Authentication Failure");
		}, 50);
	});;


});
// --------------------------------------------------------------------------------------------------------------------
// Utilities:
// VERIFY
async function verify(req, username, password) {
	var db = req.db;
	var collection1 = db.get('userList');
	var collection2 = db.get('guserList');
	collection1.find({
		"username": username
	}, {}, function (err, docs) {
		if (err == null) {
			console.log(docs[0]['password']);
			console.log(docs[0]['password'] === password);
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