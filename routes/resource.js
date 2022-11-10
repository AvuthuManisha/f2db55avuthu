var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Yogurt_controller = require('../controllers/Yogurt');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Yogurt ROUTES ///
// POST request for creating a Yogurt.
router.post('/Yogurts', Yogurt_controller.Yogurt_create_post);
// DELETE request to delete Yogurt.
router.delete('/Yogurts/:id', Yogurt_controller.Yogurt_delete);
// PUT request to update Yogurt.
router.put('/Yogurts/:id', Yogurt_controller.Yogurt_update_put);
// GET request for one Yogurt.
router.get('/Yogurts/:id', Yogurt_controller.Yogurt_detail);
// GET request for list of all Yogurt items.
router.get('/Yogurts', Yogurt_controller.Yogurt_list);
module.exports = router;