var express = require('express');
var router = express.Router();
var tasks = require('../models/tasks');

router.post('/', function(req, res, next) {
	var ret = {status: 'error'};
	console.log(req.body);
	tasks.add_star(req.body.id, function(err) {
		if (err != 'null') {
			ret = {status: 'successful'};
		}
		res.json(ret);
	})
});