var express = require('express');
var router = express.Router();
var tasks = require('../models/tasks');

router.post('/', function(req, res, next) {
	var ret = {status: 'error'};
	tasks.del(req.body.text, req.body.date, function(err) {
		if (err != 'null') {
			ret = {status: 'successful'};
		}
		res.json(ret);
	})
});

module.exports = router;