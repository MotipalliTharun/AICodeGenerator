const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { OpenAIApi, Configuration } = require('openai'); // Ensure both are imported correctly

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
const OpenAIApi = require('openai');

const openai=new OpenAIApi.OpenAI({ apiKey:'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' })

app.post('/generate', async (req, res) => {
  const { userInput } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      prompt: `Generate HTML, CSS, and JavaScript code for a web page with the following requirements: ${userInput}. Include interactivity using JavaScript.`,
      max_tokens: 1500,
    });

    res.json({ code: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating code.');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
