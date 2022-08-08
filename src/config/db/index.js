const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/database_course_test');

		console.log('Connect successfuly !!!');
	} catch (error) {
		console.log('Connect failure !!!');
	}
}

module.exports = {connect};
