const earbuds = require('../models/earbuds');
var Earbuds = require('../models/earbuds');
// List of all Earbudss
exports.earbuds_list = async function(req, res) {
    try{
    theEarbuds = await Earbuds.find();
    res.send(theEarbuds);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Earbuds.
exports.earbuds_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Earbuds detail: ' + req.params.id);
};
// Handle Earbuds create on POST.
exports.earbuds_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Earbuds();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"earbuds_type":"goat", "cost":12, "size":"large"}
    document.earbuds_type = req.body.earbuds_type;
    document.earbuds_name = req.body.earbuds_name;
    document.earbuds_size = req.body.earbuds_size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle Earbuds delete form on DELETE.
exports.earbuds_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Earbuds delete DELETE ' + req.params.id);
};
// Handle Earbuds update form on PUT.
exports.earbuds_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Earbuds update PUT' + req.params.id);
};
exports.earbuds_view_all_Page = async function(req, res) {
    try{
    theEarbuds = await Earbuds.find();
    res.render('earbuds', { title: 'Earbuds Search Results', results: theEarbuds });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.earbuds_detail = async function(req, res) { 
        console.log("detail"  + req.params.id) 
        try { 
            result = await earbuds.findById( req.params.id) 
            res.send(result) 
        } catch (error) { 
            res.status(500) 
            res.send(`{"error": document for id ${req.params.id} not found`); 
        } 
    }; 

    exports.earbuds_update_put = async function(req, res) { 
        console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await earbuds.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.earbuds_type)  
                   toUpdate.earbuds_type = req.body.earbuds_type; 
            if(req.body.earbuds_name) toUpdate.earbuds_name = req.body.earbuds_name; 
            if(req.body.earbuds_size) toUpdate.earbuds_size = req.body.earbuds_size; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
    }; 