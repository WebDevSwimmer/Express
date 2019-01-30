var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send('GET route on things.');
});

router.post('/', function (req, res) {
	res.send('POST route on thing.');
});

module.exports = router;