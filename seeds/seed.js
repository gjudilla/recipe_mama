const sequelize = require('../config/connection');
const { Blog, User } = require('../models');

// const userData = require('./userData.json');
const blogData = require('./blogData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.create(userData);

  await Blog.bulkCreate(blogData);
//     ), {
//     individualHooks: true,
//     returning: true,
//   });

  process.exit(0);
};

seedDatabase();