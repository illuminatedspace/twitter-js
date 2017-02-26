const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/');

const app = express();
app.use(volleyball);
app.use('/', routes);

app.use('/', function(req, res, next){
	console.log('Request:', req.method, req.path);
  res.on('finish', function() {
    console.log('Responded:', res.statusCode);
  })
  next();
});


app.use('/special/', function(req, res, next){
  console.log('This is a special area:', req.method, req.path);
  next();
});

app.use(express.static('public'));

// app.get('/', function(req, res, next){
// 	res.render('index.html', locals);
// });

// app.get('/news', function(req, res, next){
// 	res.send('Breaking News:');
// });




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

nunjucks.configure('views', {noCache: true});
//we want to turn off caching because we will be making changes, so we don't want to keep storing our current version
//configure takes you to the environment where you want to use render

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
