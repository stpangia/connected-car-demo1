exports.oauth_handshake = function(req, res) {
    // Which device?
    // device passed in req.params.device

    // Query to retrieve token

    // Set session var with token
    // req.session.user_token = 'asdf';

    res.redirect('/map');
};

exports.logout = function(req, res) {
	req.session.destroy(function(err) {
		res.redirect('/');
	})
};

