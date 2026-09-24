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
<img width="1904" height="827" alt="Screenshot 2026-09-24 at 10 17 21" src="https://github.com/user-attachments/assets/dc67c8b3-2a99-47f0-8782-30d2d7f5f253" />
<img width="1897" height="858" alt="Screenshot 2026-09-24 at 10 31 58" src="https://github.com/user-attachments/assets/5de817b8-609a-44e0-922c-bebc63dae5a3" />
<img width="1881" height="835" alt="Screenshot 2026-09-24 at 10 24 13" src="https://github.com/user-attachments/assets/2531f4cc-ec42-4bb5-ae03-cc7a4f5857ec" />
<img width="1900" height="848" alt="Screenshot 2026-09-24 at 10 26 00" src="https://github.com/user-attachments/assets/c3715c72-509f-4264-9788-ea98ab263697" />
<img width="1887" height="870" alt="Screenshot 2026-09-24 at 15 10 36" src="https://github.com/user-attachments/assets/b49fb043-43ac-4879-8d6b-12cd78d3fe05" />
<img width="1892" height="855" alt="Screenshot 2026-09-24 at 15 10 07" src="https://github.com/user-attachments/assets/c3c4440a-03d9-439e-af1b-4a36f57a97fe" />
<img width="1920" height="1080" alt="Screenshot 2026-09-24 at 15 10 02 (2)" src="https://github.com/user-attachments/assets/93558b43-d8a9-4cb2-88f8-96f74ef26eca" />
<img width="1440" height="900" alt="Screenshot 2026-09-24 at 15 10 02" src="https://github.com/user-attachments/assets/b2af7ac6-64d1-404b-8cf5-2f4431e7fbca" />
<img width="1897" height="845" alt="Screenshot 2026-09-24 at 15 09 57" src="https://github.com/user-attachments/assets/ed661445-76d4-4ffa-b657-818d04032743" />
<img width="1904" height="694" alt="Screenshot 2026-09-24 at 15 09 30" src="https://github.com/user-attachments/assets/53ffb23e-545a-4052-bcbb-947ba4313272" />
<img width="1912" height="674" alt="Screenshot 2026-09-24 at 15 09 14" src="https://github.com/user-attachments/assets/5ac75c5e-0a8a-4919-8f92-f0af80bafa2a" />
<img width="1528" height="496" alt="Screenshot 2026-09-24 at 15 09 04" src="https://github.com/user-attachments/assets/49418c8e-c60f-4bd7-9116-6945a91b0110" />
<img width="1920" height="1080" alt="Screenshot 2026-09-24 at 15 08 57 (2)" src="https://github.com/user-attachments/assets/db866c25-eff8-45ae-9790-c4ddff046fa2" />
<img width="1440" height="900" alt="Screenshot 2026-09-24 at 15 08 57" src="https://github.com/user-attachments/assets/ebf209b0-8905-4270-a328-7d47f88a9c01" />
<img width="1901" height="852" alt="Screenshot 2026-09-24 at 15 08 11" src="https://github.com/user-attachments/assets/9ec2d6fb-62af-4937-aa06-433a83714706" />
<img width="1918" height="808" alt="Screenshot 2026-09-24 at 15 08 03" src="https://github.com/user-attachments/assets/274d49c1-4bb5-435d-810e-6f47d56fcd89" />
<img width="1903" height="814" alt="Screenshot 2026-09-24 at 15 07 52" src="https://github.com/user-attachments/assets/a510b60c-1715-4b98-87f0-c990d3aa2f20" />
<img width="1909" height="867" alt="Screenshot 2026-09-24 at 15 07 34" src="https://github.com/user-attachments/assets/00356ebb-6045-4bd7-9d70-53e936ad7559" />
<img width="1397" height="888" alt="Screenshot 2026-09-24 at 15 06 33" src="https://github.com/user-attachments/assets/9d4762e6-b176-4d70-b6a5-b9e453d833f5" />

A screenshot of the working chatbot can be added here in the future.

## 👩‍💻 Author

**Mary22-prog**

GitHub: https://github.com/Mary22-prog

---

⭐ If you find this project useful, feel free to explore the code and experiment with the architecture.
