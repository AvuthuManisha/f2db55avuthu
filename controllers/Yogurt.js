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
exports.Yogurt_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Yogurt.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

   exports.Yogurt_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Yogurt.findById( req.params.id)
    // Do updates of properties
    if(req.body.Yogurt_flavours)
    toUpdate.Yogurt_flavours = req.body.Yogurt_flavours;
    if(req.body.Yogurt_price) toUpdate.Yogurt_price = req.body.Yogurt_price;
    if(req.body.Yogurt_quantity) toUpdate.Yogurt_quantity = req.body.Yogurt_quantity;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
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

   // Handle Yogurt delete on DELETE.
exports.Yogurt_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Yogurt.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };