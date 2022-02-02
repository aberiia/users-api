const db = require("../../../entities/Database");

function getUsersCount() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT COUNT(*) as count FROM users`, (err, row) => {
      if (err) reject("Cannot find users");
      resolve(row);
    });
  });
}

module.exports = getUsersCount;