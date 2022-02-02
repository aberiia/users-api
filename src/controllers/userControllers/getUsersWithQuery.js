const db = require("../../../entities/Database");

function getUsersWithQuery(query) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users limit ${query}`, (err, row) => {
      if (err) reject("Cannot find users");
      resolve(row);
    });
  });
}

module.exports = async (req, res) => {
  const { query } = req.params;
  try {
    let users = await getUsersWithQuery(query);
    if (users.length === 0) res.status(404).send("Cannot find users, create new one!");
    else res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};
