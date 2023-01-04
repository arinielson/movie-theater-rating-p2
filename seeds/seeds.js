const sequelize = require('../config/connection');
const { User, Review } = require('../models');

const userData = require('./userData.json');
const theatreData = require('./theatreData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const theatre of theatreData) {
    await Theatre.create({
      ...theatre,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();