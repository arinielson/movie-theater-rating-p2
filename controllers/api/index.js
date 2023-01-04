const router = require('express').Router();
const theatreRoute = require('./theatreRoutes');
const userRoute = require('./userRoutes');

router.use('/users', userRoute);
router.use('/theatres', theatreRoute); 

module.exports = router; 

