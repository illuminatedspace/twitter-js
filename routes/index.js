//router is a middleware handler
const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res){
	let tweets = tweetBank.list();
	res.render('index', {tweets: tweets});
});

router.get('/users/:name', function(req, res){
	var name = req.params.name;

	let tweets = tweetBank.find({name: name});
	res.render('index', {tweets: tweets});
});

router.get('/tweets/:id', function(req, res) {
  var id = parseInt(req.params.id);
  let tweets = tweetBank.find({idNum: id});
  res.render('index', {tweets: tweets});
});


module.exports = router;
