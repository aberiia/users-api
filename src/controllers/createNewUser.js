const db = require("../../entities/Database");

function createUser(id, firstname, lastname, birthDate, email) {
  console.log("createUserData:", id, firstname, lastname, birthDate, email);
  console.log(
    typeof id,
    typeof firstname,
    typeof lastname,
    typeof birthDate,
    typeof email
  );

  const sql = `INSERT INTO users(userId, firstname, lastname, birthDate, email)  
  VALUES ('${id}', '${firstname}', '${lastname}','${birthDate}', '${email}');`;

  return new Promise((resolve, reject) => {
    db.run(sql, (err) => {
      if (err) return console.log(err.message);
      setTimeout(() => {
        resolve`User with id${id} has been created successfully`;
      }, 100);
    });
  });
}

module.exports = createUser;
