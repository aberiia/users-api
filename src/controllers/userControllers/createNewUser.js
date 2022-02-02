const db = require("../../../entities/Database");

function createUser(id, firstname, lastname, birthDate, email) {
  console.log("createUserData:", id, firstname, lastname, birthDate, email);

  const sql = `INSERT INTO users(userId, firstname, lastname, birthDate, email)  
  VALUES ('${id}', '${firstname}', '${lastname}','${birthDate}', '${email}');`;

  return new Promise((resolve, reject) => {
    db.run(sql, (err) => {
      if (err) return console.log(err.message);
        resolve`User with id${id} has been created successfully`;
    });
  });
}

module.exports = async (req, res) => {
  const { id, firstname, lastname, birthDate, email } = req.params;
  try {
    let createdUserStatus = await createUser(id, firstname, lastname, birthDate, email);
    console.log("CREATED USER", id);
    res.status(200).send('User created successfully');
  } catch (error) {
    console.log("ERROR: createNewUser controller error: ", error)
    res.status(500).send("Internal server error");
  }
};
