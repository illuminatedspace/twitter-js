//router is a middleware handler
const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res){
	let tweets = tweetBank.list();
	res.render('index', {tweets: tweets});
});

// router.get('/stylesheets/style.css', function(req, res, next){
// 	res.sendFile('style.css', {root: __dirname + '/public/stylesheets/'}); 
// 	next();
// });



module.exports = router;