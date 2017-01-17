//router is a middleware handler
const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res){
	let tweets = tweetBank.list();
	//console.log("FULL LIST!!!", tweets);
	res.render('index', {tweets: tweets});
});

router.get('/users/:name', function(req, res){
	var name = req.params.name;
	//console.log(name);
	let tweets = tweetBank.find({name: name});
	res.render('index', tweets);
});



module.exports = router;