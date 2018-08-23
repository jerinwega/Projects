//var express = require('express');
//var router = express.Router();
//
//
//    router.get('/*', function(req,res){
//    
//    res.sendFile(__dirname + "/home.html");
//    
//});
//
//
//module.exports = router;

var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '1515';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
 console.log(hash);
});
