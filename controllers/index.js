const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// module.exports = router;

// import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: "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",
// });


// async function aiStart() {
//     const chatCompletion = await openai.chat.completions.create({
//         messages: [{ role: "user", content: `Recommend me one recipe based only off of these ingredients, provide needed quantities for each ingredient, and explain how to make the dish: ${ingOne}, ${ingTwo}, ${ingThree}, ${ingFour}, ${ingFive}, ${ingSix},${ingSeven}, ${ingEight}` }],
//         model: "gpt-3.5-turbo",
//         temperature: 0,
//         max_tokens: 1000
//     });    

//     console.log()
// }
// aiStart()

module.exports = router;