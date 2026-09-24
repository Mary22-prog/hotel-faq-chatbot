# hotel-faq-chatbot
A serverless hotel FAQ chatbot built with HTML, CSS, JavaScript, AWS API Gateway, and AWS Lambda.

# 🏨 Hotel FAQ Chatbot

A simple serverless hotel FAQ chatbot that allows guests to ask common hotel-related questions and receive instant answers through a web-based chat interface.

## 📌 Project Overview

This project demonstrates how a lightweight chatbot can be built using a combination of frontend web technologies and AWS serverless services.

Users interact with the chatbot through a browser. Their question is sent to an API endpoint, processed by an AWS Lambda function, and the appropriate FAQ response is returned to the chat interface.

## ✨ Features

* 💬 Interactive chat interface
* ⚡ Serverless backend
* ☁️ AWS API Gateway integration
* 🧠 AWS Lambda-based FAQ processing
* 📱 Simple responsive design
* 🔒 No database required
* 🚀 Lightweight and easy to deploy

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

### Backend

* AWS Lambda
* Python
* Amazon API Gateway

## 🏗️ Architecture

```text
┌─────────────────────┐
│   Web Browser       │
│  HTML/CSS/JavaScript│
└──────────┬──────────┘
           │
           │ HTTP POST
           ▼
┌─────────────────────┐
│   API Gateway       │
│      POST /chat     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    AWS Lambda       │
│    HotelFAQBot      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     FAQ Logic       │
│  Question Matching  │
└──────────┬──────────┘
           │
           ▼
      JSON Response
           │
           ▼
┌─────────────────────┐
│   Chat Interface    │
│    Displays Answer  │
└─────────────────────┘
```

## 💡 Example Questions

The chatbot currently supports questions such as:

* What time is check in?
* What time is check out?
* Is breakfast included?
* Do you have airport pickup?
* Can I cancel my booking?
* Is laundry service available?
* Is room service available?
* Do you have parking?

## 🔄 How It Works

1. A guest enters a question in the chat interface.
2. JavaScript sends the question to the API Gateway endpoint.
3. API Gateway forwards the request to the AWS Lambda function.
4. Lambda processes the question and searches the FAQ data.
5. Lambda returns the matching answer as JSON.
6. JavaScript displays the answer in the chat window.

## 📂 Project Structure

```text
hotel-faq-chatbot/
│
├── index.html      # Chatbot interface
├── style.css       # Chatbot styling
├── script.js       # Frontend logic and API communication
└── README.md       # Project documentation
```

## 🚀 Running the Frontend Locally

Clone the repository:

```bash
git clone https://github.com/Mary22-prog/hotel-faq-chatbot.git
```

Navigate into the project:

```bash
cd hotel-faq-chatbot
```

Start a local web server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## ☁️ AWS Components

The backend was built using AWS serverless services:

* **Amazon API Gateway** — receives HTTP requests from the frontend.
* **AWS Lambda** — processes questions and returns FAQ answers.

The Lambda function uses Python and contains the hotel's FAQ information and matching logic.

## 🎯 Project Goals

This project was created to practice:

* Building a web application with HTML, CSS and JavaScript
* Connecting a frontend application to an API
* Working with AWS Lambda
* Working with Amazon API Gateway
* Understanding serverless application architecture
* Handling JSON requests and responses
* Implementing a simple chatbot-style user experience

## 🔮 Future Improvements

Possible future improvements include:

* Add more hotel FAQs
* Improve natural-language question matching
* Connect the chatbot to a database
* Add conversation history
* Add an AI-powered response system
* Add hotel-specific information such as room availability
* Deploy the frontend using Amazon S3 and CloudFront
* Add automated testing and CI/CD

## 📸 Project Preview

A screenshot of the working chatbot can be added here in the future.

## 👩‍💻 Author

**Mary22-prog**

GitHub: https://github.com/Mary22-prog

---

⭐ If you find this project useful, feel free to explore the code and experiment with the architecture.
