const usersDb = []
let baseId = 0

const findAllUsers = async() => {
    return usersDb
}

const findUserById = async(id) => {
    const filteredUser = await usersDb.find((user) => user.id == id)
    return filteredUser
}

const createUser = async(userObject) => {
    const newUser = {
        id: baseId++,
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        email: userObject.email,
        password: userObject.password,
        age: userObject.age,
    }
    await usersDb.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser
}