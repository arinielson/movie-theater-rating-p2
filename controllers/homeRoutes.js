const router = require('express').Router();
const { Theatre, User, Address, Review } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage', {});

    


});

module.exports = router 