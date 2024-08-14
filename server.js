import express from 'express';
import path from 'path';
import getChatbotResponse from './chatbot.js';
import __dirname from './dirname.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/getChatbotResponse', async (req, res) => {
    const userMessage = req.body.userMessage;
    // Use OpenAI API to generate a response
    const chatbotResponse = await getChatbotResponse(userMessage);
    // Send the response back to the client
    res.json({ chatbotResponse: chatbotResponse[0].generated_text });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});



