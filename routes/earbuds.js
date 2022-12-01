var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('earbuds', { title: 'search results earbuds' });
});
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
var express = require('express');
const earbuds_controlers= require('../controllers/earbuds');
var router = express.Router();
/* GET earbudss */
router.get('/', earbuds_controlers.earbuds_view_all_Page );
router.get('/detail', secured, earbuds_controlers.earbuds_view_one_Page);
router.get('/create', secured, earbuds_controlers.earbuds_create_Page);
router.get('/update', secured, earbuds_controlers.earbuds_update_Page);
router.get('/delete', secured, earbuds_controlers.earbuds_delete_Page); 

module.exports = router;

module.exports = router;
