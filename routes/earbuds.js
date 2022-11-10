var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('earbuds', { title: 'search results earbuds' });
});
var express = require('express');
const earbuds_controlers= require('../controllers/earbuds');
var router = express.Router();
/* GET costumes */
router.get('/', earbuds_controlers.earbuds_view_all_Page );
module.exports = router;

module.exports = router;
