var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('earbuds', { title: 'search results earbuds' });
});
var express = require('express');
const earbuds_controlers= require('../controllers/earbuds');
var router = express.Router();
/* GET earbudss */
router.get('/', earbuds_controlers.earbuds_view_all_Page );
router.get('/detail', earbuds_controlers.earbuds_view_one_Page);
router.get('/create', earbuds_controlers.earbuds_create_Page);
router.get('/update', earbuds_controlers.earbuds_update_Page);
router.get('/delete', earbuds_controlers.earbuds_delete_Page); 

module.exports = router;

module.exports = router;
