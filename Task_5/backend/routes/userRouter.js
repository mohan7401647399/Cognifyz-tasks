const express = require('express'),
    router = express.Router()

const { getAllUsers, createItem, updateItem, deleteItem } = require('../controllers/userController')

router.get('/', getAllUsers)
    .post('/item', createItem)
    .put('/item/:id', updateItem)
    .delete('/item/:id', deleteItem)


module.exports = router