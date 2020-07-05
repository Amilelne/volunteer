var express = require('express');
var cors = require('cors');
var router = express.Router();
const fs = require('fs');
var response;

var corsOptions = {

    origin: 'http://localhost:3000',

    credentials: true

}


router.post('/viewVolunteers', cors(corsOptions), async function(req, res) {
    // return volunteerList if success
    // Maximum return 10
    var db = req.db;
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
    }], function(err1, docs1) {
        console.log(docs1);
        res.send(docs1);
    });
});

// State and Creation Date cannot be edited



router.post('/viewDemands', cors(corsOptions), async function(req, res) {
    var db = req.db;
    var collection = db.get('demandList');
    collection.find({"state": "Waiting"}, {}, function(err1, docs1) {
        console.log(docs1);
        res.send(docs1);
    });



});




module.exports = router;