var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var earbuds_controller = require('../controllers/earbuds');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/earbudss', earbuds_controller.earbuds_create_post);
// DELETE request to delete Costume.
//router.delete('/earbudss/:id', earbuds_controller.earbuds_delete);
// PUT request to update Costume.
//router.put('/earbudss/:id', earbuds_controller.earbuds_update_put);
// GET request for one Costume.
router.get('/earbudss/:id', earbuds_controller.earbuds_detail);
// GET request for list of all Costume items.
router.get('/earbudss', earbuds_controller.earbuds_list);
module.exports = router;