const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    // Display user's message
    displayMessage('user', message);
    // Call OpenAI API to get chatbot's response
    getChatbotResponse(message);
    // Clear user input
    userInput.value = '';
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const messageParagraph = document.createElement('p');
    messageParagraph.innerText = message;

    messageElement.appendChild(messageParagraph);
    chatLog.appendChild(messageElement);

    // Desplaza el chat hacia abajo
    chatLog.scrollTop = chatLog.scrollHeight;
}


function getChatbotResponse(userMessage) {
    // Make a request to your server with the user's message
    fetch('/getChatbotResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        // Display chatbot's response
        displayMessage('chatbot', data.chatbotResponse);
    })
    .catch(error => console.error('Error:', error));
}