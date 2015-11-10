/// <reference path='../typings/tsd.d.ts' />

import express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

export = router;