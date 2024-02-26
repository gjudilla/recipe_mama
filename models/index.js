const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'postedBy', // The foreign key in the Recipe model
  targetKey: 'id', // The target key in the User model
  as: 'postedByUser'
});

module.exports = { User, Recipe };