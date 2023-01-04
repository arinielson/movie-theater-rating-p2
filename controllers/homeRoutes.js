const router = require('express').Router();
const { Theatre, User } = require('../models');

router.get('/', async (req, res) => {
    res.send('hello');

})

module.exports = router 