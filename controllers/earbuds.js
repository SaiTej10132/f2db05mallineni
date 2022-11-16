var earbudss = require('../models/earbudss'); 
 
// List of all earbudsss 
exports.earbudss_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbudss list'); 
}; 

// List of all earbudsss 
exports.earbudss_list = async function(req, res) { 
    try{ 
        theearbudsss = await earbudss.find(); 
        res.send(theearbudsss); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// // for a specific earbudss. 
exports.earbudss_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbudss detail: ' + req.params.id); 
}; 
// for a specific earbudss. 
exports.earbudss_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await earbudss.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// List of all earbudsss 
exports.earbudss_detail = async function(req, res) { 
    try{ 
        theearbudsss = await earbudss.find(); 
        res.send(theearbudsss); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle earbudss create on POST. 
exports.earbudss_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbudss create POST'); 
}; 
 
// List of all earbudsss 
exports.earbudss_create_post = async function(req, res) { 
    try{ 
        theearbudsss = await earbudss.find(); 
        res.send(theearbudsss); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle earbudss delete form on DELETE. 
exports.earbudss_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbudss delete DELETE ' + req.params.id); 
}; 
// Handle earbudss delete on DELETE. 
exports.earbudss_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await earbudss.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// List of all earbudsss 
exports.earbudss_delete = async function(req, res) { 
    try{ 
        theearbudsss = await earbudss.find(); 
        res.send(theearbudsss); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 




// Handle earbudss update form on PUT. 
// exports.earbudss_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: earbudss update PUT' + req.params.id); 
// }; 

// List of all earbudsss 
// exports.earbudss_update_put = async function(req, res) { 
//     try{ 
//         theearbudsss = await earbudss.find(); 
//         res.send(theearbudsss); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle earbudss update form on PUT. 
exports.earbudss_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await earbudss.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.item)toUpdate.item = req.body.item; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//Handle building the view for updating a earbudss. 
// query provides the id 
exports.earbudss_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await earbudss.findById(req.query.id) 
        res.render('earbudssupdate', { title: 'earbudss Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.earbudss_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await earbudss.findById(req.query.id) 
        res.render('earbudssdelete', { title: 'earbudss Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a earbudss. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.earbudss_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('earbudsscreate', { title: 'earbudss Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.earbudss_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await earbudss.findById( req.query.id) 
        res.render('earbudssdetail',  
{ title: 'earbudss Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.earbudss_view_all_Page = async function(req, res) { 
    try{ 
        theearbudsss = await earbudss.find(); 
        res.render('earbudsss', { title: 'earbudss Search Results', results: theearbudsss }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle earbudss create on POST. 
exports.earbudss_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new earbudss(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"earbudss_type":"goat", "cost":12, "size":"large"} 
    document.item = req.body.item; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
