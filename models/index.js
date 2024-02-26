const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {

  
});

module.exports = { User, Recipe };