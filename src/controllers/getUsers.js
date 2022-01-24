const db = require("../../entities/Database");
const shuffle = require("../../helpers/shuffle");

function getUsers() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", (err, row) => {
      if (err) reject("Cannot find users");
      setInterval(() => {
        return resolve(row);
      }, 100);
    });
  });
}

module.exports = getUsers;
