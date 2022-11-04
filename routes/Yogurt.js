var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Yogurt', { title: 'Search Results for Yogurt' });
});

module.exports = router;
