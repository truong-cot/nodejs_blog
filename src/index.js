const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 8000;

// Template engine => defaultLayout(views/layout/main), config extname => .hbs
app.engine('hbs', handlebars.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Config static file (http://localhost:8000 =>> là thư mục public)
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Create page
app.get('/', (req, res) => {
	res.render('home');
});

app.get('/news', (req, res) => {
	res.render('news');
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
