const sequelize = require('../config/connection');
const { Recipe, User } = require('../models');


const recipeData = require('./recipeData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(userData);

  // await Recipe.bulkCreate(recipeData);
  process.exit(0);
};

seedDatabase();