const router = require('express').Router();
const { User, Recipe } = require('../../models');

// GET all recipes for dashboard
router.get('/', async (req, res) => {
    try {
        const dbRecipeData = await Recipe.findAll({
            order: [['id', 'DESC']] // Sort by 'id' column in descending order
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

router.get('/myrecipes', async (req, res) => {
  try {
      // Assuming req.session.userId holds the ID of the logged-in user
      const userName = req.session.userName;
      
      // If there's no logged-in user, redirect or handle as necessary
    //   if (!userName) {
    //       return res.redirect('/'); 
    //   }

      const dbRecipeData = await Recipe.findAll({
          where: {              
              postedBy: userName
          },
          order: [['id', 'DESC']]
        //   include: [
        //       {
        //           model: User,

        //       },
        //   ],
      });
      
      const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));
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