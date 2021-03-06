//CONTROLLERS
var tasks = require('../models/tasks');

module.exports = {

	index: function(req, res, next) {
		var data = [];
		tasks.list(/*уже выполнили list, ждем ответа с БД, и передаем его в анонимную функцию ->*/function(err, rows) {
			rows.forEach(function(value, index) {
				data.push(value);
			});
			//res.render нужно прописывать вне цикла, так как он должен один раз выполниться
			res.render('index', {title: 'Todolist', data: data});
		});
	},


	add: function(req, res, next) {
		//console.log(req.body.text);
		tasks.add(req.body.text, req.body.date, req.body.star, function(err, rows) {
			var ret = {status: 'error'};
			if (err != 'null') {
				ret = {status: 'successful', id: rows.insertId};
			}
			//Можем отдать аяксу, что данные успешно добавлены
			res.json(ret);	
		});
		console.log("Adding data to DB (Hello from controller)");
	},


	update: function(req, res, next) {
		console.log("Update is invoked: " + JSON.stringify(req.body));
		console.log("ID from URL ", req.params.id);
		tasks.update(req.params.id, req.body.stars, function(err) {
			var ret = {status: 'error'};
			if (err != 'null') {
				ret = {status: 'successful'};
			}
			//Можем отдать аяксу, что данные успешно добавлены
			res.json(ret);			
		})
	},


	del: function(req, res) {
		console.log("Delete is invoked, ID of element is " + req.body.id);
		var ret = {status: 'error'};
		tasks.del(req.body.id, function(err) {
			if (err != 'null') {
				ret = {status: 'successful'};
			}
			res.json(ret);
		});
	}
//Обработка просроченности даты задачи а также подготовка всех данных для отображении в представлении
/*function format(rows, callback) {
	var newRow = [];
	rows.forEach(function(value, index) {
		var date = value.date;
		var status = value.status;
		if(date != '0' && status == 0) {
			var d = new Date();
			var cur_date = Date.parse(d)/1000;
			var db_date = Date.parse(date)/1000;
			if (cur_date > db_date) {
				value.status = 2;
			}
		}
		newRow.push(value);
	});
	callback(newRow);//Попробуй вместо коллбек любое название функции
};*/
};