const router = require('express').Router();
const path = require('path');
const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);
// Axios library
const axios = require("axios");
// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, index.html2 is rendered
  res.sendFile(path.join(__dirname, '../../views/index2.html'));
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const response = await getRecipefromOpenAI(req.body.ingredients);
  console.log(response);
  // Here, index.html2 is rendered
  res.json(response);
});

async function getRecipefromOpenAI(contentString) {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content:`Provide one recipe based off of these ingredients, provide needed quantities for each ingredient, and explain how to make the dish: ${contentString}. Only give me the name of the dish, the ingredient list, and directions.`, // need to add template literal variables for the ingredients
      },
    ],
    max_tokens: 500,
    temperature: 1,
  };



  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const recipeContent = response.data.choices[0].message.content;
    return recipeContent;
  } catch (error) {
    console.error("Error making OpenAI API request:", error);
    throw error;
  }
}

module.exports = router