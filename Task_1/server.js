const express = require('express'),
    bodyParser = require('body-parser'),
    PORT = 3000,
    app = express(),
    userRoute = require('./routes/userRoutes')

//  middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//  static files
app.use(express.static('public'));

//  EJS - view engine
app.set('view engine', 'ejs')

//  routes
app.use('/', userRoute)

//  server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})