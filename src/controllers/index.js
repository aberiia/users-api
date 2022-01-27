const getPaginatedUsers = require('./getPaginatedUsers');
const deleteUser = require('./deleteUser');
const createUser = require('./createNewUser');
const editUserData = require('./editUserData');
const getUsersWithQuery = require('./getUsersWithQuery');
module.exports = {
    getPaginatedUsers,
    getUsersWithQuery,
    deleteUser,
    createUser,
    editUserData
}