
const express = require('express');
const router = express.Router();

router.post('/', function (req, res, next) {
    console.log(" - - - - ");

    console.log(req);
 
    console.log(" - - - - ");

    console.log(" - - - - ");

    console.log(req.body);
 
    console.log(" - - - - ");

    res.status(200).send(req.body);
});

module.exports = router;
