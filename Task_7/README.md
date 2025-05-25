
```markdown
# Advanced API Usage and External API Integration

This project demonstrates how to build a modern web application that leverages both **internal API routing** and **external API integration**. It showcases the use of **OAuth 2.0 authentication with Google**, along with a live integration of a public **Weather API** to fetch real-time data. The backend is structured using `express`, `router`, and `controller` design patterns for maintainability.

---

## 🌐 Project Objective

- Implement secure user authentication using **Google OAuth 2.0**
- Fetch and display real-time weather data from an external **Weather API**
- Structure server-side logic using modular **routers** and **controllers**
- Manage environment variables using `dotenv`
- Maintain a smooth development experience with `nodemon`
- Perform asynchronous API calls using `axios`

---

## 🛠️ Tools & Technologies Used

- **Express** – Web framework for server setup and routing
- **Nodemon** – Automatically restarts the server on file changes
- **Axios** – For making HTTP requests to external APIs
- **Dotenv** – For managing sensitive environment variables
- **Passport** – Middleware for authentication
- **Passport-Google-OAuth20** – Google strategy for OAuth 2.0 login
- **Weather API** – External API to retrieve weather data
- **OAuth 2.0** – Secure authentication protocol

---

## 📁 Project Structure Overview

The project is organized into multiple modules for scalability:

- **routes/**: Handles API endpoints and routing logic
- **controllers/**: Contains the core logic for each route
- **auth/**: Manages Google OAuth setup and authentication flow
- **config/**: Stores configuration logic such as keys and environment variables
- **public/**: Frontend assets (if applicable)
- **.env**: Contains API keys, OAuth credentials, and secrets

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Google Developer Console account for OAuth setup
- API key from a public weather service provider (e.g., OpenWeatherMap)

### Installation Steps

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Create a `.env` file and configure:
   - Google OAuth credentials
   - Weather API key
4. Start the server using `nodemon` or `npm start`

---

## 🔐 Key Features

- **OAuth 2.0 Login**: Authenticate users using their Google accounts securely
- **Weather API Integration**: Fetches live weather information based on user input or geolocation
- **Modular Design**: Cleanly separated concerns using routes and controllers
- **Environment Protection**: Credentials and sensitive data stored securely using environment variables
- **Asynchronous Requests**: External API requests handled efficiently with error handling and response management

---

## 🔗 External API Used

- **Google OAuth 2.0** – For secure user authentication
- **WeatherAPI / OpenWeatherMap** – To retrieve current weather conditions

---

## 📦 Core Dependencies

- `express`
- `axios`
- `dotenv`
- `passport`
- `passport-google-oauth20`
- `nodemon`

---

## 🧠 Learning Outcomes

- How to use OAuth 2.0 with third-party providers like Google
- Making and managing external API requests in Node.js
- Structuring backend code using routes, controllers, and middleware
- Protecting sensitive credentials with environment variables
- Building scalable and maintainable server-side applications

---


## 🙌 Acknowledgements

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Passport.js Guide](http://www.passportjs.org/)
- [Axios Documentation](https://axios-http.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Express.js Docs](https://expressjs.com/)