const express = require('express'),
    router = express.Router()

const { submitData, getUser } = require('../controller/userController')

router.get('/', getUser)
    .post('/submit', submitData)


module.exports = router