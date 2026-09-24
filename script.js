const API_URL =
    "https://lee049uimg.execute-api.eu-central-1.amazonaws.com/chat";


async function sendQuestion() {

    const input = document.getElementById("question");
    const chatBox = document.getElementById("chat-box");

    const question = input.value.trim();

    if (!question) {
        return;
    }

    // Show user's question
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = question;

    chatBox.appendChild(userMessage);

    // Clear input
    input.value = "";

    // Show temporary message
    const botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.textContent = "Thinking...";

    chatBox.appendChild(botMessage);

    try {

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question: question
            })
        });

        const data = await response.json();

        if (response.ok) {
            botMessage.textContent = data.answer;
        } else {
            botMessage.textContent =
                "Sorry, something went wrong.";
        }

    } catch (error) {

        console.error(error);

        botMessage.textContent =
            "Sorry, I couldn't connect to the hotel server.";
    }

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}