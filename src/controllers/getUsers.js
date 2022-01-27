const db = require("../../entities/Database");

function getUsers(offset,limit) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users LIMIT ${offset}, ${limit}`, (err, row) => {
        setInterval(() => {
          return resolve(row);
        }, 100);

      if (err) reject("Cannot find users");
      
    });
  });
}

module.exports = getUsers;
