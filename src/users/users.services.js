const usersControllers = require ('./users.controllers')

const getAllUsers = (req, res) => {
    usersControllers.findAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getUsersById = (req, res) => {
    const id = Number (req.params.id)
    usersControllers.findUsersById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json ({message: 'ID Not Found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const postNewUser = (req,res) => {
    const userObject = req.body
    usersControllers.createUser(userObject)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


module.exports = {
    getAllUsers,
    getUsersById,
    postNewUser
}