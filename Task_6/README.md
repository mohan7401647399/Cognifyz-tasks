
```markdown
# Database Integration and User Authentication

This project demonstrates how to implement a secure user authentication system with full database integration. It uses MongoDB as the database, Mongoose for data modeling, and includes token-based authentication using JSON Web Tokens (JWT). The project follows a modular structure with separate routes and controllers for scalability and maintainability.

---

## 🔐 Project Objectives

- Establish a connection between Node.js and MongoDB
- Securely register and authenticate users
- Hash user passwords using `bcryptjs`
- Manage sessions and authorization via JWT
- Load sensitive data securely using environment variables
- Structure the application using `routes` and `controllers` for clean architecture

---

## 🛠️ Tools & Technologies Used

- **Express** – Web framework for Node.js
- **Mongoose** – ODM for MongoDB
- **dotenv** – For managing environment variables
- **bcryptjs** – Password hashing utility
- **jsonwebtoken** – Secure authentication using JWT
- **nodemon** – Development tool for auto-restarting server
- **Routes & Controllers** – Organized and scalable application structure

---

## 🧱 Project Structure

The project is organized to separate concerns clearly:

- **routes/**: Defines API endpoints
- **controllers/**: Contains logic for handling route operations
- **models/**: Mongoose schemas and database structure
- **config/**: MongoDB and dotenv configuration files
- **middlewares/**: Custom middlewares like auth verification (if applicable)

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed locally or a MongoDB Atlas account
- Postman or a browser extension to test API routes

### Installation

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Create a `.env` file for environment variables such as database URI and JWT secret
4. Use `nodemon` or `npm start` to run the server

---

## 🔐 Key Features

- **User Registration**: Stores user credentials securely with hashed passwords
- **User Login**: Verifies credentials and returns a signed JWT
- **Protected Routes**: Access control using JWT verification middleware
- **Environment Security**: Secrets and connection strings managed via `.env`
- **Modular Codebase**: Easily extendable with well-separated route/controller logic

---

## 📦 Core Dependencies

- `express`
- `mongoose`
- `dotenv`
- `bcryptjs`
- `jsonwebtoken`
- `nodemon`

---

## 🧠 Learning Outcomes

- Secure user authentication with password hashing
- Stateless authentication using JWT
- Connecting Node.js backend to MongoDB using Mongoose
- Best practices in project structure using MVC pattern
- Managing development and production environment variables

---

## 🙌 Acknowledgements

- [Express Documentation](https://expressjs.com/)
- [MongoDB & Mongoose Docs](https://mongoosejs.com/docs/)
- [JWT Guide](https://jwt.io/)
- [bcryptjs Documentation](https://www.npmjs.com/package/bcryptjs)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)