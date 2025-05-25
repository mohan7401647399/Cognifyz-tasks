const express = require('express'),
    app = express(),
    PORT = 5000,
    cors = require('cors'),
    userRouter = require('./routes/userRouter')

    //  middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//  cors
app.use(cors({ origin: true }))

//  routes
app.use('/api', userRouter)

//  server start
app.listen(PORT, () => console.log(`Server running on ${PORT}`))