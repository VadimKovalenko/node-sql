var express = require('express');
var router = express.Router();
var tasks = require('../models/tasks');

router.post('/', function(req, res, next) {
	tasks.add(req.body.text, req.body.date, function(err, rows) {
		var ret = {status: 'error'};
		if (err != 'null') {
			ret = {status: 'successful', id: rows.insertId};
		}
		res.json(ret);
	})
});

module.exports = router;