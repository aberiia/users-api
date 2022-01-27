const db = require("../../entities/Database");

function getUsersCount() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT COUNT(*) as count FROM users`, (err, row) => {
        setInterval(() => {
          return resolve(row);
        }, 100);


      if (err) reject("Cannot find users");
      
    });
  });
}

module.exports = getUsersCount;