var express = require('express');
var cors = require('cors');
var router = express.Router();
const fs = require('fs');


var corsOptions = {

  origin:'http://localhost:3000',

  credentials:true

}

// --------------------------------------------------------------------------------------------------------------------
// USER BEHAVIORS:
// LOGIN, LOGOUT

router.post('/login', cors(corsOptions),function(req, res) {
  // return volunteerList if success
  // Maximum return 10
  var username = req.body.username;
  var password = req.body.password;
  
  var db = req.db;
  var collection1 = db.get('userList');
  var collection2 = db.get('guserList');
	let response = verify(req,username,password); 
	console.log(response);
    if(response){
		var collection = db.get('volunteerList');
		var collection3 = db.get('needList');
	    collection.aggregate([{
	    	$lookup: { from: 'userList', localField: 'username', foreignField: 'username', as: 'username' } 
	    }, {
            $unwind: {
                path: "$username",
                preserveNullAndEmptyArrays: false
            }
        },{
            $lookup: {
                from: "needList",
                localField: "volunteerList.username",
                foreignField: "needList.username",
                as: "username1"
            }
        },{
            $unwind: {
                path: "$username1",
                preserveNullAndEmptyArrays: false
            }
        },{ 
        	$limit: 10 
        }
		],function(err1,docs1){
		    console.log(docs1);
		    res.send(docs1);
	});
	}else res.json("Login failure");
});

router.get('/logout', cors(corsOptions),function(req, res) {
  res.send("logout");
 
});


// --------------------------------------------------------------------------------------------------------------------
// MANAGE DEMAND:
// ADD, EDIT, VIEW, DELETE, COMMENT

router.post('/addDemand', cors(corsOptions),function(req, res){
  // get info
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;
  // var volusername = req.body.volusername;
  var state = req.body.state;
  var type = req.body.type;
  var descript = req.body.descript;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;


  let response = verify(req,username,password); 
  console.log(response);
  if(response){
  	var collection = db.get('demandList');
  	collection.insert({
  		gusername:username,
  		// volusername: volusername, 
  		state:state,
  		type:type,
  		description:descript,
  		creation_date:today
  	}, 
  		function(err, result){
    		res.json("Demand is added successfully");
  		}
  	);
  }else res.json("Authentication Failure");
  
  
});


// State and Creation Date cannot be edited
router.post('/editDemand', cors(corsOptions),function(req, res){
  // get info
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;
  var type = req.body.type;
  var descript = req.body.descript;
  var _id = req.body._id;


  let response = verify(req,username,password); 
  console.log(response);
  if(response){
  	var collection = db.get('demandList');
  	collection.update({
  		_id:_id,
  		gusername:username
  	},{
  		$set: {
	  		type:type,
	  		description:descript
  		}
  	}, 
  		function(err, result){
    		res.json("Demand is edited successfully");
  		}
  	);
  }else res.json("Authentication Failure");
  
  
});


router.post('/viewDemands', cors(corsOptions),function(req, res){
  // get info
  var db = req.db;
  var username = req.body.username;
  var password = req.body.password;


  let response = verify(req,username,password); 
  if(response){
  	var collection = db.get('demandList');
	collection.find({
	    gusername:username 
	},function(err1,docs1){
		console.log(docs1);
		res.send(docs1);
	});
  }else res.json("Authentication Failure");
  
  
});
// --------------------------------------------------------------------------------------------------------------------
// Utilities:
// VERIFY
async function verify(req,username,password){
  var db = req.db;
  var collection1 = db.get('userList');
  var collection2 = db.get('guserList');
  var res;
  await collection1.find({"username":username},{}, function(err,docs){
    if(err == null){
    	console.log("1");
      if(docs.length!=0&&docs[0]['password']==password){
      	console.log("2");
         collection2.find({"username":username},{},function(err2,docs2){
          if(err2 == null){
          	console.log("3");
            if(docs2.length!=0){
            	res = true;
            }else { res = false};
          }else { res = false};     
      });
    }else { res = false};
  }else { res = false};
});
  console.log(res);
  return res;
}
/*
 * Handle preflighted request
 */

var allow = ['/uploadphoto','/updatelike/:photoid','/deletephoto/:photoid'];
router.options(allow,cors(corsOptions));



module.exports = router;