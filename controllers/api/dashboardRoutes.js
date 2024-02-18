const router = require('express').Router();
const { User, Recipe } = require('../../models');

// GET all recipes for dashboard
router.get('/', async (req, res) => {
    try {
        const dbRecipeData = await Recipe.findAll({
            include: [
                {
                    model:User,
                    
                },
            ],
        });
        
    const recipes = dbRecipeData.map((recipe) =>
    recipe.get({ plain: true })
  );
  res.render('dashboard', {
    recipes,
    loggedIn: req.session.loggedIn,
  });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

module.exports = router