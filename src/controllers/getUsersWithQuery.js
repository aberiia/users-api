const db = require("../../entities/Database");

function getUsersWithQuery(query) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users
    ORDER BY RAND()
    LIMIT ${query}`, (err, row) => {
      if (err) reject("Cannot find users");
      resolve(row);
    });
  });
}

module.exports = getUsersWithQuery;