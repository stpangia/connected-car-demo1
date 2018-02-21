var express = require('express');
var router = express.Router();

// Require controller modules.
var map_controller = require('../controllers/mapController');
var user_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET OAuth handshake. */
router.get('/oauth-redirect/:device', user_controller.oauth_handshake);

/* GET Logout and forget token (Should be POST but this is just a demo project). */
router.get('/logout', user_controller.logout);

/* GET map pages. */
router.get('/map', map_controller.map_show);

module.exports = router;
