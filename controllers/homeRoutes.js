const router = require('express').Router();
const { Theatre, User, Address, Review } = require('../models');

router.get('/', async (req, res) => {
    
    //const userData = await User.findAll().then((users) => res.json(users));

    res.render('homepage');
    


});

module.exports = router 