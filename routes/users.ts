/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send(
        [{
                firstName: 'Sylvain',
                lastName: 'PONTOREAU'
            },{
                firstName: 'Guillaume',
                lastName: 'SPERA'
            },{
                firstName: 'Aroua',
                lastName: 'TOUKABRI'
            },{
                firstName: 'Anthony',
                lastName: 'GUILLAUME'
            }
        ]
    );
    console.log('Send users');
});

export = router;