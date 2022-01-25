const db = require("../../entities/Database");
const shuffle = require("../../helpers/shuffle");

function getUsers(limit,cursor) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users LIMIT ${cursor}, ${limit}`, (err, row) => {
      if(row.length === 0){
        return resolve(cursor);
      }
      if (err) reject("Cannot find users");
      setInterval(() => {
        return resolve(row);
      }, 100);
    });
  });
}

module.exports = getUsers;
