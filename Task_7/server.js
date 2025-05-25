require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const PORT = 3000;

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

// Passport configuration
require('./config/auth');

// Middleware
app.use(express.static('public'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Register routes
app.use(authRoutes);
app.use(userRoutes);
app.use(weatherRoutes);

//  Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));