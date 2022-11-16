var express = require('express');
const Yogurt_controlers= require('../controllers/Yogurt');
var router = express.Router();

/* GET Yogurts. */
router.get('/', Yogurt_controlers.Yogurt_view_all_Page );


/* GET detail Yogurt page */
router.get('/detail', Yogurt_controlers.Yogurt_view_one_Page);

/* GET create Yogurt page */
router.get('/create', Yogurt_controlers.Yogurt_create_Page);

/* GET create update page */
router.get('/update', Yogurt_controlers.Yogurt_update_Page);

module.exports = router;