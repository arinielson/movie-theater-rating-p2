const sequelize = require('../config/connection');
const { User, Review, Theatre, Address } = require('../models');

const userData = require('./userData.json');
const theatreData = require('./theatreData.json');
const addressData = require('./addressData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  return User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })
  .then(() => Theatre.bulkCreate(theatreData, {
    individualHooks: true,
    returning: true,
  }))
  .then(() => Address.bulkCreate(addressData, {
    individualHooks: true,
    returning: true,
  }))
  .then(() => Review.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  }));  
};

const data = require('./theatreData.json');
app.get('/movies', (req, res) => {
    res.render('movies', { data });
  });


seedDatabase()
.then(() => {
  process.exit(0);
});