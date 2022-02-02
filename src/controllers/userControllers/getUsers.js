const db = require("../../../entities/Database");

module.exports = async (req, res) => {
  try {
    let users = await new Promise((resolve, reject) => {
      db.all(`SELECT * FROM users `, (err, row) => {
        if (err) reject("Cannot find users");
        resolve(row);
      });
    });
    if (users.length === 0) {
      res.status(200).send([]);
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
      console.log("ERROR: getUsers controller error: ", error)
    res.status(500).send("Internal server error");
  }
};
