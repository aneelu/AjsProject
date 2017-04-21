'use strict';

var jwt = require('jsonwebtoken');

var service = {};
service.authenticate = authenticate;

module.exports = service;
function authenticate(req, res) {
	// Prepare object for select query
	var query = {
		table : 'user',
		conditions : {
			'userName' : req.body.user
		}
	};

	req.client.select(query, function(err, result) {
		var user = result[0];
		if (!err) {
			if (!user) {
				res.json({
					success : false,
					message : 'Authentication failed.'
				});
			} else if (user) {

				if (user.userName != req.body.user
						|| user.password != req.body.password) {
					res.json({
						success : false,
						message : 'Authentication failed.'
					});
				} else {
					user.password = '';
					var token = jwt.sign(user, req.app.config.secret, {
						expiresIn : req.app.config.sessionExp
					});

					req.session.token = token;
					// res.cookie('token',token, { resave: true,maxAge:
					// req.app.config.sessionExp, httpOnly: true });

					res.json({
						success : true,
						message : 'Token Created',
						user: user,
						token : token
					});
				}
			}
		} else {
			req.logger.error('Error while fetching the data : '
					+ req.params.tableName, err);
			res.json('{"result":false}');
		}
	});
}