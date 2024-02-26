const router = require('express').Router();
const path = require('path');
const { Recipe } = require('../../models');
const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);
// Axios library
const axios = require("axios");
const sequelize = require('../../config/connection');


router.get('/', async (req, res) => {
    try {
        const dbRecipeData = await Recipe.findAll({
            order: [['id', 'DESC']] // Sort by 'id' column in descending order
          });
        
    const recipes = dbRecipeData.map((recipe) =>
    recipe.get({ plain: true })
  );
  res.render('pantry2', {
    recipes,
    loggedIn: req.session.loggedIn,
  });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});