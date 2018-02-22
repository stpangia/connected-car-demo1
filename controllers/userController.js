var deviceAdapter = require('../lib/deviceAdapter');

exports.oauth_handshake = function(req, res) {
	// Initialize user's device via adapter
  var device = deviceAdapter.getDevice(req.params.device);

  // Get access token
	device.getAccessToken(req.query.code)
		.then(function(body) {
			// Set session var with device info
			req.session.device = {
				type: device.name,
				user_token: body.access_token
			};
			// Redirect to map view
			res.redirect('/map');
		})
		.catch(function (err) {
			console.log('error: ' + err )
			return next(err);
    });
};

exports.logout = function(req, res) {
	req.session.destroy(function(err) {
		res.redirect('/');
	})
};

