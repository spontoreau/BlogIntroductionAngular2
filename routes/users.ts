/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send(
        [{
                firstName: 'Sylvain',
                lastName: 'PONTOREAU'
            },{
                firstName: 'Sylvain1',
                lastName: 'PONTOREAU1'
            },{
                firstName: 'Sylvain2',
                lastName: 'PONTOREAU2'
            },{
                firstName: 'Sylvain3',
                lastName: 'PONTOREAU3'
            },{
                firstName: 'Sylvain4',
                lastName: 'PONTOREAU4'
            }
        ]
    );
    console.log('Send users');
});

export = router;