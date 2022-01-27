const db = require("../../entities/Database");

function editUserData(id, firstname, lastname) {
  const sql = `UPDATE users
  SET firstname = '${firstname}',
      lastname = '${lastname}'
  WHERE
      id = ${id};`
  return new Promise((resolve, reject) => {
    db.run(sql, (err) => {
      if (err) {
        console.log(err);
        reject("Cannot update user's information");
      }
        resolve `User's info updated`;
   
        
    
    });
  });
}

module.exports = editUserData;