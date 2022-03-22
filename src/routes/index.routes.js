var express = require('express');

var router = express.Router();

const { getHomepage } = require('../controllers/IndexController');

/* GET home page. */
router.get('/', getHomepage);

module.exports = router;
