const express = require('express');
const router = express.Router();
const userRoutes = require('../../controllers/api/userRoutes.js'); // Importing userRoutes file

router.use('/users', userRoutes);

router.get('/dashboard', (req, res) => {
    // Check if the user is logged in
    if (req.session.loggedIn) {
        // Access the username from the session and render the dashboard page
        res.render('dashboard', { username: req.session.username });
    } else {
        res.redirect('/login'); // Redirect to login page if the user is not logged in
    }
});

let recipeName = document.querySelector('#recipeName').value.trim();
let ingredients = document.querySelector('#ingredients').value.trim();
let instructions = document.querySelector('#instructions').value.trim();
let closingLine = document.querySelector('#closingRemark').value.trim();
let username = req.session.username;

const addRecipeHandler = async (event) => {
    event.preventDefault();
  
    // DOM variables


  
  
    // if recipeName and ingredients submitted to add recipe
    if (recipeName && ingredients && instructions && closingLine) {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ recipeName, ingredients, instructions, closingLine, username }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // if response is OK then redirect to another page
      if (response.ok) {
        alert('Recipe added to your favorites!  Check out your recipes and others on the Dashboard.');
      } else {
        alert('err');
      }
    }
  };
  
  // Event listener for form submission
  document.querySelector('#saveRecipe').addEventListener('submit', addRecipeHandler);

  module.exports = router;