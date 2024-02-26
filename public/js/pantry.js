// Add item from input when clicking "Add" button
var addItemBtn = document.getElementById('add-item-btn');
addItemBtn.addEventListener('click', function() {
var newItemInput = document.getElementById('new-item-input');
var newItemText = newItemInput.value.trim();
if (newItemText !== '') {
    var newListItem = document.createElement('li');
    newListItem.textContent = newItemText;
    newListItem.className = 'sortable-item';
    newListItem.id = 'sortable-item';

// delete button
    var deleteButton = document.createElement('span');
    deleteButton.textContent = '×';
    deleteButton.className = 'delete-item';
    deleteButton.addEventListener('click', function() {
        newListItem.remove();
    });
    newListItem.appendChild(deleteButton);
    newListItem.draggable = true; // Make the new list item draggable
    newListItem.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
    document.getElementById('sortable-list').appendChild(newListItem);
    newItemInput.value = ''; // Clear input after adding item
}
});

// Make the list sortable
var sortableList = Sortable.create(document.getElementById('sortable-list'), {
animation: 150
});

// Create drag and drop event 
const dragList = document.getElementById('sortable-list');
const basketList = document.getElementById('basket');

function allowDrop(event) {
event.preventDefault();
}

function drop(event) {
event.preventDefault();
const data = event.dataTransfer.getData('text/plain');
const li = document.createElement('li');
li.innerHTML = data;
basketList.appendChild(li);
}

function createListItem(text) {
const li = document.createElement('li');
li.textContent = text;

}


document.addEventListener('DOMContentLoaded', () => {
    const recipeButton = document.getElementById('recipe-button');
    if (recipeButton) {
      recipeButton.addEventListener('click', async () => {
        const rawIngredients = Array.from(document.getElementsByClassName('sortable-item'));
        const ingredients = rawIngredients.map(item => item.innerText.split('\n')[0]);
        console.log(ingredients);
        console.log(rawIngredients);
        const contentString = ingredients.join(', ');
        console.log(contentString);
        var obj;
          fetch('/api/pantry', {
          method: 'POST',
          body: JSON.stringify({
            ingredients: contentString
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        

        //     console.log("its worked" + recipeTitle);
        //   if (!response.ok) {
        //     throw new Error('Network response was not ok');
        //   }
        //   return response.json();

        // .then(data => {
        // })
        //   fetch('/api/pantry/fetchHighestEntry') // Fetch the highest entry after posting to /api/pantry
        // .then(data => {
        //          const recipeContainer = document.getElementById('recipe-div');
        //          recipeContainer.innerHTML = '';  
        //          const recipeTitle = document.createElement('h2');
        //          recipeTitle.textContent = data.recipe_title;
  
        //          const recipeIngredients = document.createElement('p');
        //          recipeIngredients.textContent = data.ingredients;
  
        //          const recipeInstructions = document.createElement('p');
        //          recipeInstructions.textContent = data.instructions;
      
        //          recipeContainer.appendChild(recipeTitle);
        //          recipeContainer.appendChild(recipeIngredients);
        //          recipeContainer.appendChild(recipeInstructions);
        // })
        // .then(response => {
        //   if (!response.ok) {
        //     throw new Error('Network response was not ok');
        //   }
        //   return response.json();
        // })
        // .then(data => {
        //   console.log(data);
          
        //   const recipeEl = document.getElementById('recipe-div');
        //     recipeEl.innerText = JSON.stringify(data);
   
        // .catch(error => console.error('Error:', error));
      });
    }
  });



// .then(response => response.json()) // Parse the JSON response
// .then(data => {
    
//     const recipeContainer = document.getElementById('recipe-container');
    
//     recipeContainer.innerHTML = '';
    
//     const recipeTitle = document.createElement('h2');
//     recipeTitle.textContent = data.recipeTitle;

//     const recipeIngredients = document.createElement('ol');
//     data.ingredients.forEach(ingredients => {
//         const ingredientItem = document.createElement('li');
//         ingredientItem.textContent = ingredients
//         recipeIngredients.appendChild(ingredientItem);
//     });
    
//     const recipeInstructions = document.createElement('ol');
//     data.instructions.forEach(instruction => {
//         const instructionItem = document.createElement('li');
//         instructionItem.textContent = instruction;
//         recipeInstructions.appendChild(instructionItem);
//     });
    
//     recipeContainer.appendChild(recipeTitle);
//     recipeContainer.appendChild(recipeInstructions);
// })
// .catch(error => {
//     console.error('Error:', error);
// });