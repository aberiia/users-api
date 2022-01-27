require("dotenv").config();
const {
  getUsers,
  deleteUser,
  createUser,
  editUserData,
  getPaginatedUsers,
  getUsersWithQuery,
} = require("./controllers");
const express = require("express");
var cors = require("cors");

const { PORT } = require("./config/config");
const getUsersCount = require("./controllers/getUsersCount");

const app = express();

app.use(express.json());
app.use(cors());
app.get("/users=:query", async (req, res) => {
  const { query } = req.params;
  try {
    let users = await getUsersWithQuery(query);
	console.log('users',users);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/limit=:limit&offset=:offset", async (req, res) => {
  const { limit, offset } = req.params;
  let convertedOffset = +offset;
  let convertedLimit = +limit;
  console.log("limit", limit, "offset", offset);
  try {
    let usersCountObj = await getUsersCount();
    let users = await getPaginatedUsers(offset, limit);

    let count = usersCountObj[0].count;
    let lastUsersAmount = Math.round(count % convertedLimit);
    if (convertedLimit + convertedOffset >= count) {
      res.status(200).send({
        users,
        count,
        isEnd: true,
        limit: lastUsersAmount,
        offset: convertedOffset,
      });
    } else {
      res.status(200).send({
        users,
        count,
        isEnd: false,
        limit: convertedLimit,
        offset: convertedOffset + convertedLimit,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
app.delete(`/:userId`, async (req, res) => {
  const { userId } = req.params;
  try {
    let deletedUser = await deleteUser(userId);
    res.send(deletedUser);
  } catch (error) {
    res.send(error.message);
  }
});
app.post(
  "/userId=:userId&firstname=:firstname&lastname=:lastname",
  async (req, res) => {
    const { userId, firstname, lastname } = req.params;
    console.log("userId", userId, "firstname", firstname, "lastname", lastname);
    try {
      let changedStatus = await editUserData(userId, firstname, lastname);
      console.log("UPDATED USER DATA", userId);
      res.status(200).send("Updated successfully ^_^");
    } catch (error) {
      res.send(error.message);
    }
  }
);
app.post(
  "/id=:id&firstname=:firstname&lastname=:lastname&birthDate=:birthDate&email=:email",
  async (req, res) => {
    const { id, firstname, lastname, birthDate, email } = req.params;
    try {
      let res = await createUser(id, firstname, lastname, birthDate, email);
      console.log("CREATED USER", id);
      res.send(res);
    } catch (error) {
      res.send(error.message);
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
