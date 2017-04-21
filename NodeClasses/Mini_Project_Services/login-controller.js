'use strict';

var express = require('express');
var loginService = require('../../services/login/login-service');
var router = express.Router();

/* authenticate */
/*router.get('/authenticate', function(req, res) {
	loginService.authenticate(req, res);
});*/

/* authenticate */
router.post('/authenticate', function(req, res) {
	loginService.authenticate(req, res);
});

module.exports = router;

