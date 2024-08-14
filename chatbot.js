import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const MyAPIKey = process.env.API_KEY;

async function getChatbotResponse(userMessage) {
    try {
        // Make a POST request to the Hugging Face API
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
            { inputs: userMessage },
            {
                headers: {
                    'Authorization': `Bearer ${MyAPIKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Return the chatbot's response
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        return `An error occurred while processing the request: ${error.message}`;
    }
}

export default getChatbotResponse;
