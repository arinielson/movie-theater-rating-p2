const router = require('express').Router();
const { Theatre, User, Address, Review } = require('../models');
const fs = require('fs');

const reviewData = JSON.parse(fs.readFileSync('seeds/reviewData.json'));
const amcReviews = reviewData.find((review) => review.theatre_id === '1');
const cinemarkReviews = reviewData.find((review) => review.theatre_id === '2');
const megaplexReviews = reviewData.find((review) => review.theatre_id === '3');

const theatreData = JSON.parse(fs.readFileSync('seeds/theatreData.json'));
const amcTheatreInfo = theatreData.find((theatre) => theatre.id === '1');
const cinemarkTheatreInfo =theatreData.find((theatre) => theatre.id === '2');
const megaplexTheatreInfo =theatreData.find((theatre) => theatre.id === '3');

const addressData = JSON.parse(fs.readFileSync('seeds/addressData.json'));
const amcLocations = addressData.filter((address) => address.theatre_id === '1');
const cinemarkLocations = addressData.filter((address) => address.theatre_id === "2");
const megaplexLocations = addressData.filter((address) => address.theatre_id === "3");

console.log("here");
console.log(amcLocations);
router.get('/', async (req, res) => {
   
    res.render('homepage', {
        AMC: {
            name: amcTheatreInfo.name,
            id: amcTheatreInfo.id,
            reviews: amcReviews,
            locations: amcLocations,
        },
        Cinemark: {
            name: cinemarkTheatreInfo.name,
            id: cinemarkTheatreInfo.id,
            reviews: cinemarkReviews,
            locations: cinemarkLocations,
        },
        Megaplex: {
            name: megaplexTheatreInfo.name,
            id:megaplexTheatreInfo.id,
            reviews: megaplexReviews,
            locations: megaplexLocations,
        },
    });
        

    


});

module.exports = router 