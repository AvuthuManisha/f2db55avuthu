var express = require('express');
const Yogurt_controlers= require('../controllers/Yogurt');
var router = express.Router();

/* GET Yogurts. */
router.get('/', Yogurt_controlers.Yogurt_view_all_Page );
module.exports = router;