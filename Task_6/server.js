const express = require('express'),
    app = express(),
    PORT = 5000,
    db = require('./db/dbconnection'),
    userRoute = require('./routes/userRoutes'),
    env = require('dotenv').config()

//  parse application/x-www-form-urlencoded
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//  db connection
db.getDataBase()

//  routes
app.use('/', userRoute)

//  server start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})