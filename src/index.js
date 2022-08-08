const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

//
const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 8000;

// Connect database
db.connect();

// Template engine => defaultLayout(views/layout/main), config extname => .hbs
app.engine('hbs', handlebars.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Config static file (http://localhost:8000 =>> là thư mục public)
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Routes init
route(app);

// Console log
app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
