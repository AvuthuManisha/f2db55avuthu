var Yogurt = require('../models/Yogurt');
// List of all Yogurts
exports.Yogurt_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt list');
};
// for a specific Yogurt.
exports.Yogurt_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt detail: ' + req.params.id);
};
// Handle Yogurt create on POST.
exports.Yogurt_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt create POST');
};
// Handle Yogurt delete form on DELETE.
exports.Yogurt_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt delete DELETE ' + req.params.id);
};
// Handle Yogurt update form on PUT.
exports.Yogurt_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt update PUT' + req.params.id);
};