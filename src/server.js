require("dotenv").config();
const {
  getUsers,
  deleteUser,
  createUser,
  editUserData,
  getPaginatedUsers,
  getUsersWithQuery,
  addUserPic,
  getUserPic
} = require("./controllers");
const multer = require('multer');
const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/config");

const app = express();
// for attachments upload
const upload = multer({ dest: './images/' });

const getAllUsersHandler = "/api/users";
const editUserDataHandler = "/api/editUser/userId=:userId&firstname=:firstname&lastname=:lastname";
const userPaginationHandler = "/api/paginateUsers/limit=:limit&offset=:offset";
const getUsersWithQueryHandler = "/api/users=:query";
const deleteUserHandler = `/api/deleteUser/:userId`;
const createUserHandler = "/api/createUser/id=:id&firstname=:firstname&lastname=:lastname&birthDate=:birthDate&email=:email";
const addUserPicHandler = '/api/upload-user-image';
const getUserPicHandler = "/api/users/getImage";
app.use(express.json());
app.use(cors());

// FOR ADVANCED CORS USAGE >
// app.use(
//   express.urlencoded(),
//   cors({
//       origin: 'http://localhost:3000'
//   })
// );

app.get(getAllUsersHandler, getUsers);
app.get(getUsersWithQueryHandler, getUsersWithQuery);
app.get(userPaginationHandler, getPaginatedUsers);
app.get(getUserPicHandler, getUserPic);
app.post(editUserDataHandler, editUserData);
app.post(createUserHandler, createUser);
app.post(addUserPicHandler, upload.single('files'), addUserPic);
app.delete(deleteUserHandler, deleteUser);



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
