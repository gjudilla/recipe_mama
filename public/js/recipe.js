const recipeContainer = document.getElementById('recipe-container');

fetch('/your-api-endpoint-for-creating-recipe', {
  method: 'POST',
  body: JSON.stringify({ ingredients: yourIngredientsData }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  const { recipe } = data;
  // Render the recipe data in the recipe container
  recipeContainer.innerHTML = `
    <h2>${recipe.recipeTitle}</h2>
    <h3>Ingredients:</h3>
    <p>${recipe.ingredients}</p>
    <h3>Instructions:</h3>
    <p>${recipe.instructions}</p>
    <p>Posted by: ${recipe.postedBy}</p>
  `;
})
.catch(error => {
  console.error('Error:', error);
});