var Yogurt = require('../models/Yogurt');

// List of all Yogurts
exports.Yogurt_list = async function(req, res) {
    try{
    theYogurts = await Yogurt.find();
    res.send(theYogurts);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

/*// List of all Yogurt
exports.Yogurt_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt list');
};*/
// for a specific Yogurt.
exports.Yogurt_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt detail: ' + req.params.id);
};

// Handle Yogurt create on POST.
exports.Yogurt_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Yogurt();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Yogurt_flavours":"Strawberry","Yogurt_price":50,"Yogurt_quantity":100}
    document.Yogurt_flavours = req.body.Yogurt_flavours;
    document.Yogurt_price = req.body.Yogurt_price;
    document.Yogurt_quantity = req.body.Yogurt_quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle Yogurt delete form on DELETE.
exports.Yogurt_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt delete DELETE ' + req.params.id);
};
// Handle Yogurt update form on PUT.
exports.Yogurt_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Yogurt update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Yogurt_view_all_Page = async function(req, res) {
    try{
    theYogurts = await Yogurt.find();
    res.render('Yogurt', { title: 'Yogurt Search Results', results: theYogurts });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };