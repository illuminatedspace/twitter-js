const express = require('express');

const app = express();

// var articles = ['A', 'B', 'C'];

app.use('/', function(req, res, next){
	console.log('Request:', req.method, req.path, req.statusCode);
  next();
});

app.use('/special/', function(req, res, next){
  console.log('This is a special area:', req.method, req.path);
  next();
});

app.get('/', function(req, res, next){
	res.send('Welcome');
});

app.get('/news', function(req, res, next){
	res.send('Breaking News:');
});

// app.use('/', function(req, res, next){
// 	console.log('Request:', req.method, req.path);
// 	next();
// });

// //matches every symbol in app matching input symbol
// //and then does function
// app.get('/', function(req, res, next){
// 	res.send('This is enough');
// })

// app.get('/articles', function(req, res, next){
// 	res.json(articles);
// });

// //error handling middleware
// app.use(function(err, req, res, next){
// 	console.error(err.msg);
// 	res.sendStatus(err.status);
// }

app.listen(3000, function(){
	console.log('Server listening');
});

