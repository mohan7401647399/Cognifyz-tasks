const express = require('express'),
    router = express.Router()

const { registerUser, loginUser, getUsers } = require('../controllers/userController')
const authenticationToken = require('../middleware/userProtect')

//  routes
router.post('/register', registerUser)
    .post('/login', loginUser)
    .get('/', authenticationToken, getUsers)

module.exports = router