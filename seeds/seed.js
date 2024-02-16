const sequelize = require('../config/connection');
const { Recipe, User } = require('../models');

// const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.create(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();