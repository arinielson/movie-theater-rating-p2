const User = require('./User');
const Review = require('./Review');
const Theatre = require('./Theatre');
const Address = require('./Address');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Address.hasMany(Review, {
  foreignKey: 'address_id'
});

Theatre.hasMany(Address, {
  foreignKey: 'theatre_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Review.belongsTo(Address, {
  foreignKey: 'address_id'
});

Address.belongsTo(Theatre, {
  foreignKey: 'theatre_id'
});

module.exports = { User, Review, Theatre, Address };