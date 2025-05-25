```markdown
# HTML Structure and Basic Server

This project is a simple Node.js application designed to demonstrate how to structure HTML views and create basic server interactions using **Express**, **EJS**, and **body-parser**. It is ideal for beginners learning how to handle HTTP requests, form submissions, and dynamic content rendering using server-side JavaScript.

---

## 🛠 Tools & Technologies

- **Express**: Minimal and flexible Node.js web application framework for routing and server-side logic.
- **EJS**: Embedded JavaScript templating engine for generating HTML markup dynamically.
- **body-parser**: Middleware for parsing incoming request bodies, particularly form data.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/html-structure-basic-server.git
cd html-structure-basic-server
````

2. Install project dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. Open your browser and visit:

```
http://localhost:3000
```

---

## 💡 Features

* Clean HTML structure rendered using EJS
* Simple form submission with POST request handling
* Parsed form data displayed dynamically
* Static file support via the Express `public` directory

---

## 🧠 How It Works

* The home route (`/`) renders an EJS template containing an HTML form.
* When the form is submitted, data is sent to the server using a POST request.
* `body-parser` extracts the form data from the request body.
* The server processes the data and renders a result page using another EJS view.

---

## 📜 Scripts

* `npm start` — Runs the server using Node.js (as defined in `package.json`).

---

## 👤 Author

**Your Name**
GitHub: https://github.com/mohan7401647399
Email: mtm.kcs@gmail.com

---

## 🔗 Resources

* [Express Documentation](https://expressjs.com/)
* [EJS Documentation](https://ejs.co/)
* [body-parser npm](https://www.npmjs.com/package/body-parser)
* [Node.js Official Site](https://nodejs.org/)