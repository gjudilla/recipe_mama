// Access the API Key
require("dotenv").config({ path: "../.env" });
const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);
// Axios library
const axios = require("axios");

const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// jordan's code


async function getRecipefromOpenAI() {
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


getRecipefromOpenAI()
  .then((recipeContent) => {
    const splitContent = recipeContent.split("\n\n");
    let [dishTitle, ingredients, directions] = splitContent;

    let directionsArray = directions.split("\n");

    let closingLine = directionsArray.pop();
    closingLine = closingLine.replace(/^\d+\.\s*/, "");

    directions = directionsArray.join("\n");

    console.log("Dish Title:", dishTitle);
    console.log("Ingredients:", ingredients);
    console.log("Directions:", directions);
    console.log("Closing Line:", closingLine);
  })
  .catch((error) => {
    console.error("Error fetching recipe:", error);
  });

module.exports = router;