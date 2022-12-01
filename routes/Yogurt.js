var express = require('express');
const Yogurt_controlers= require('../controllers/Yogurt');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET Yogurts. */
router.get('/', Yogurt_controlers.Yogurt_view_all_Page );


/* GET detail Yogurt page */
router.get('/detail', Yogurt_controlers.Yogurt_view_one_Page);

/* GET create Yogurt page */
router.get('/create',secured, Yogurt_controlers.Yogurt_create_Page);

/* GET create update page */
router.get('/update',secured, Yogurt_controlers.Yogurt_update_Page);

/* GET delete Yogurt page */
router.get('/delete',secured, Yogurt_controlers.Yogurt_delete_Page);

module.exports = router;