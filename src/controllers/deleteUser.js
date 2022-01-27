const db = require("../../entities/Database");

function deleteUser(id) {
  console.log("USER ID", id);
  return new Promise((resolve, reject) => {
    db.all(`DELETE FROM users WHERE id= ${id}`, (err, row) => {
      if (err) {
        console.log(err);
        reject("Cannot find user with this id");
      }
        resolve`User deleted successfully`;
        
    
    });
  });
}

module.exports = deleteUser;
