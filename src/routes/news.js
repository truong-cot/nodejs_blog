const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Config route
router.get('/:slus', newsController.show);
router.get('/', newsController.index);

module.exports = router;
