var earbuds = require('../models/earbuds'); 
 
// List of all earbuds 
exports.earbuds_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds list'); 
}; 

// List of all earbuds 
exports.earbuds_list = async function(req, res) { 
    try{ 
        theearbuds = await earbuds.find(); 
        res.send(theearbuds); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// // for a specific earbuds. 
exports.earbuds_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds detail: ' + req.params.id); 
}; 
// for a specific earbuds. 
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
// List of all earbuds 
exports.earbuds_detail = async function(req, res) { 
    try{ 
        theearbuds = await earbuds.find(); 
        res.send(theearbuds); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle earbuds create on POST. 
exports.earbuds_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds create POST'); 
}; 
 
// List of all earbuds 
exports.earbuds_create_post = async function(req, res) { 
    try{ 
        theearbuds = await earbuds.find(); 
        res.send(theearbuds); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle earbuds delete form on DELETE. 
exports.earbuds_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds delete DELETE ' + req.params.id); 
}; 
// Handle earbuds delete on DELETE. 
exports.earbuds_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await earbuds.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// List of all earbuds 
exports.earbuds_delete = async function(req, res) { 
    try{ 
        theearbuds = await earbuds.find(); 
        res.send(theearbuds); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 




// Handle earbuds update form on PUT. 
// exports.earbuds_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: earbuds update PUT' + req.params.id); 
// }; 

// List of all earbuds 
// exports.earbuds_update_put = async function(req, res) { 
//     try{ 
//         theearbuds = await earbuds.find(); 
//         res.send(theearbuds); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle earbuds update form on PUT. 
exports.earbuds_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await earbuds.findById( req.params.id) 
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
//Handle building the view for updating a earbuds. 
// query provides the id 
exports.earbuds_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await earbuds.findById(req.query.id) 
        res.render('earbudsupdate', { title: 'earbuds Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.earbuds_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await earbuds.findById(req.query.id) 
        res.render('earbudsdelete', { title: 'earbuds Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a earbuds. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.earbuds_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('earbudscreate', { title: 'earbuds Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.earbuds_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await earbuds.findById( req.query.id) 
        res.render('earbudsdetail',  
{ title: 'earbuds Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.earbuds_view_all_Page = async function(req, res) { 
    try{ 
        theearbuds = await earbuds.find(); 
        res.render('earbuds', { title: 'earbuds Search Results', results: theearbuds }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle earbuds create on POST. 
exports.earbuds_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new earbuds(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"earbuds_type":"goat", "cost":12, "size":"large"} 
    document.earbuds_name = req.body.earbuds_name; 
    document.earbuds_size = req.body.earbuds_size; 
    document.earbuds_type = req.body.earbuds_type; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
exports.earbuds_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await earbuds.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   exports.earbuds_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await earbuds.findById( req.query.id)
    res.render('earbudsdetail',
   { title: 'earbuds Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.earbuds_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earbudscreate', { title: 'Earbuds Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }
   exports.earbuds_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await earbuds.findById(req.query.id)
    res.render('earbudsupdate', { title: 'earbuds Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }
exports.earbuds_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await earbuds.findById(req.query.id) 
        res.render('earbudsdelete', { title: 'earbuds Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 