require("dotenv").config();
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.post('/generate-quiz', async (req, res) => {
    const { topic } = req.body
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        const prompt = `You are a quiz generator expert.
The topic is as follows: ${topic}
Perform the following task for the topic provided:
Generate 10 quiz related to the topic and output the quiz in following text format:
{"title":"title of the quiz","quizzes": [{"question": "Question 1", "options": ["Option A", "Option B", "Option C", "Option D"], "correct_option": "Option A"}, {"question": "Question 2", "options": ["Option A", "Option B", "Option C", "Option D"], "correct_option": "Option B"}, ..., {"question": "Question 10", "options": ["Option A", "Option B", "Option C", "Option D"], "correct_option": "Option C"}]}.
If the topic is not educational Output the following text {"error": "Unfortunately, this topic does not meet the standards of educational content."}
NOTE: make sure the output is plain text only do not format in json object`;

        const result = await model.generateContent(prompt);
        const text = result.response.text();
        res.json(JSON.parse(text));
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Sorry, this video can't be processed at this moment." });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
