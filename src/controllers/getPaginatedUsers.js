const db = require("../../entities/Database");

function getPaginatedUsers(offset,limit) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users LIMIT ${offset}, ${limit}`, (err, row) => {
      if (err) reject("Cannot find users");
      resolve(row);
 
      
    });
  });
}

module.exports = getPaginatedUsers;
