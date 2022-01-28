const getPaginatedUsers = require('./getPaginatedUsers');
const deleteUser = require('./deleteUser');
const createUser = require('./createNewUser');
const editUserData = require('./editUserData');
const getUsersWithQuery = require('./getUsersWithQuery');
const getUsersCount = require('./getUsersCount');
const getUsers = require('./getUsers');
const addUserPic = require('./addUserPic');
const getUserPic = require('./getUserPic');

module.exports = {
    getUsers,
    getPaginatedUsers,
    getUsersWithQuery,
    deleteUser,
    createUser,
    editUserData,
    getUsersCount,
    addUserPic,
    getUserPic
}