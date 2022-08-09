const coursesRoute = require('./courses');
const newsRoute = require('./news');
const sitesRoute = require('./sites');

function route(app) {
	// Config route
	app.use('/courses', coursesRoute);
	app.use('/news', newsRoute);
	app.use('/', sitesRoute);
}

module.exports = route;
