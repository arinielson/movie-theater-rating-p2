const router = require('express').Router();
const { Theatre, User, Address, Review } = require('../models');

router.get('/', async (req, res) => {
    Theatre.findOne({
        where: {
            id: 1
        }
    })
       .then(data => res.json(data))
       .then(data => {
            res.render('homepage',data)
 
       })
    // res.render('homepage', 
    //     Theatre.findAll({
    //         where: {
    //             id: 1
    //         }
    //     })
    // );

    


});

module.exports = router 