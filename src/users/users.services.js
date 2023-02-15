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

const getUserById = (req, res) => {
    const id = req.params.id
    usersControllers.findUserById(id)
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
    getUserById,
    postNewUser
}