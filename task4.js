function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatOutput = document.getElementById('chat-output');

    let response;

    // Check for specific user messages and generate corresponding responses
    if (userInput.toLowerCase().includes('hello')) {
        response = 'Hello there!';
    } else if (userInput.toLowerCase().includes('what are you')) {
        response = 'I am a simple chatbot. You can ask me questions or you can just chat with me.';
    } else {
        response = 'I am not sure how to respond to that.';
    }

    // Display the user's message
    chatOutput.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
    // Display the response
    chatOutput.innerHTML += `<div><strong>Chatbot:</strong> ${response}</div>`;

    // Clear input field
    document.getElementById('user-input').value = '';
}