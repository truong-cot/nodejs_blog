const Courses = require('../models/Course');
const {mongoosesToObject} = require('../../utils/mongooses');

class CoursesController {
	// [GET] /courses/:slug
	show(req, res, next) {
		// Lấy ra giá trị của params req.params.slug <slug lấy từ routes>
		Courses.findOne({slug: req.params.slug})
			.then((course) =>
				res.render('courses/course-detaill', {course_detaill: mongoosesToObject(course)})
			)
			.catch(next);
		// res.send('NEW DETAIL !!! - ' + req.params.slug);
	}
}

module.exports = new CoursesController();
