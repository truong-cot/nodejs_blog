const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
const sitesController = require('../app/controllers/sitesController');

// Config route
router.use('/search', sitesController.search);
router.use('/', sitesController.home);

module.exports = router;
