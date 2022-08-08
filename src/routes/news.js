const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Config route
router.use('/:slus', newsController.show);
router.use('/', newsController.index);

module.exports = router;
