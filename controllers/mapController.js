var deviceAdapter = require('../lib/deviceAdapter');

exports.map_show = function(req, res) {
	var device = deviceAdapter.getDevice(req.session.device.type);

	// Get trips from device API
	device.getTrips(req.session.device.user_token)
		.then(function(body) {
			// Render map
			res.render('map', {trips: body.result});
		})
		.catch(function (err) {
			console.log('error: ' + err )
			return next(err);
    });
};