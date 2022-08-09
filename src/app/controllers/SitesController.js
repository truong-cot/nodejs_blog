const Course = require('../models/Course');
const {mutipleMongoosesToObject} = require('../../utils/mongooses');

class SitesController {
	// [GET] /
	home(req, res) {
		// Lấy dữ liệu từ db render ra ui

		// Sử dụng callback
		// Course.find({}, (err, course) => {
		// 	if (!err) {
		// 		res.json(course);
		// 	} else {
		// 		res.status(400).json({err: 'ERROR !!!'});
		// 	}
		// });

		// Sử dụng promises
		Course.find({})
			.then((courses) => res.render('home', {courses: mutipleMongoosesToObject(courses)}))
			.catch((err) => res.status(400).json({err: 'ERROR !!!'}));

		// res.render('home');
	}

	// [GET] /search
	search(req, res) {
		res.render('search');
	}
}

module.exports = new SitesController();
