var mysql = require('mysql');
var config = require('../etc/config.js');
var pool = mysql.createPool(config);

var Tasks = {
	list: function(rows) {
		pool.query('SELECT * FROM tasks ORDER BY creation_date DESC', rows);
	},

	add: function(text, date, star, callback) {
		var d = new Date();
		creation_date = d.getTime();
		//date = date.length > 0 ? date + " 00:00:00 " : 0;
		pool.query('INSERT INTO tasks SET ?', {text: text, status: 0, date: date, star: star, creation_date: creation_date}, callback);
	},

	//Объедени эти запросы change и add_star
	change: function(id, stars, callback) {
		pool.query('UPDATE tasks SET ?', {star: stars}, 'WHERE ?', {ID: id}, callback);
	},

	//Объедени эти запросы change и add_star
	/*change: function(id, callback) {
		pool.query('UPDATE tasks SET status = 1 WHERE ?', {ID: id}, callback);
	},*/

	del: function(id, callback) {
		pool.query('DELETE FROM tasks WHERE ?', {creation_date: id}, callback);
	},

	add_star: function(id, callback) {
		pool.query('UPDATE tasks SET star = star + 1 WHERE ?', {ID: id}, callback);
	}
};

module.exports = Tasks;
