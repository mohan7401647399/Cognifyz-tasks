const express = require('express'),
    router = express.Router()

const { submitData, getUsers } = require('../controller/userController')


router.get('/', getUsers)
    .post('/submit', submitData)


module.exports = router