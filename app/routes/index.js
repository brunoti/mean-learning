var express = require('express');
var router   = express.Router();

router.get('/', index);

function index (req, res, next) {
    res.sendFile('public/index.html');
}

module.exports = router;

