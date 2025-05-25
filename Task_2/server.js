const express = require('express'),
    app = express(),
    PORT = 3000,
    bodyParser = require('body-parser'),
    userRoute = require('./routes/userRoutes');

//  middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  static files
app.use(express.static('public'));

//  routes
app.use('/', userRoute);

//  server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});