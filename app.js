var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var path = require("path");
var handlebars = require("handlebars");
var app = express();

var ctrls = require('./routes/index');
//Router редко нужен, все лучше прописывать через app, чтобы сразу видеть глаголы запросов

//view engine setup
var cons = require("consolidate");
app.engine('handlebars', cons.handlebars);
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Handlebars helpers
handlebars.registerHelper("showStars", function(star) {
	var stars = ''
	for(var i=1; i<=star; i++) {
		stars += "<i class='star glyphicon glyphicon-star'></i>"
	}
	return new handlebars.SafeString(stars)
})

handlebars.registerHelper("addStarsBtn", function(star) {
	var addStarsBtn = '';
	if (star) {
		if (star >= 5) {
			addStarsBtn = "<a class = 'add-star' style='display: none'><i class='glyphicon glyphicon-plus'></i></a>"
		} else {
			addStarsBtn = "<a class = 'add-star'><i class='glyphicon glyphicon-plus'></i></a>"
		}
	}
	return new handlebars.SafeString(addStarsBtn)
})

handlebars.registerHelper("removeStarsBtn", function(star) {
	var removeStarsBtn = '';
	if (star) {
		if (star <= 1) {
			removeStarsBtn = "<a class = 'remove-star' style='display: none'><i class='glyphicon glyphicon-minus'></i></a>"
		} else {
			removeStarsBtn = "<a class = 'remove-star'><i class='glyphicon glyphicon-minus'></i></a>"
		}
	}
	return new handlebars.SafeString(removeStarsBtn)
})

//Controllers
app.get('/', ctrls.index);
app.post('/add', ctrls.add);
app.put('/:id/update', ctrls.update);
app.post('/del', ctrls.del);
//app.post('/star', star);*/

//catch 404 and forward to error handler
app.use(function(req, res, next) {
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
});

port = 8081;
app.listen(port, function() {
	console.log("Listen to port " + port);
});

module.exports = app;