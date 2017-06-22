var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var path = require("path");
var handlebars = require("handlebars");
//var hbs = require("hbs");
//var pug = require("pug");
var app = express();

var ctrls = require('./routes/index');
//var update = require('./routes/update');
/*var add = require('./routes/add');
var del = require('./routes/del');
var star = require('./routes/star');*/

//Router редко нужен, все лучше прописывать через app, чтобы сразу видеть глаголы запросов

//view engine setup

var cons = require("consolidate");
app.engine('handlebars', cons.handlebars);
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'handlebars');


/*cons.swig('views/page.html', function(err, html){
  if (err) throw err;
  console.log(html);
});*/



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', function (req, res) {
	res.render('index', {title: "Hello!"});
})*/


//Controllers
app.get('/', ctrls.index);
app.post('/add', ctrls.add);
app.post('/update', ctrls.update);
app.post('/del', ctrls.del);
//app.post('/star', star);*/

//catch 404 and forward to error handler
/*app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//error handlers

//development error handler
//will print stacktrace
if(app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

//production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});	
});*/

port = 8081;
app.listen(port, function() {
	console.log("Listen to port " + port);
});

module.exports = app;