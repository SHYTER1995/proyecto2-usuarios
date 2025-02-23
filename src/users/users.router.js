const usersServices = require ('./users.services')

const router = require('express').Router()

router.get('/users',  usersServices.getAllUsers)

router.get('/users/:id',  usersServices.getUserById)

router.post('/users',  usersServices.postNewUser)

module.exports = router