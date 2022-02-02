const db = require("../../../entities/Database");

function editUserData(id, firstname, lastname) {
  const testSql = `
  UPDATE users
  SET firstname = '${firstname}',
      lastname = '${lastname}'
  WHERE
      id = ${id}
    SELECT CASE WHEN ((select count(id) from users where id = ${id} = 0 
    THEN RAISE(FAIL, "USER IS NOT FOUND")))
  `
  const sql = `UPDATE users
  SET firstname = '${firstname}',
      lastname = '${lastname}'
  WHERE
      id = ${id}`
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

module.exports = async (req, res) => {
  const { userId, firstname, lastname } = req.params;
  console.log('req', req)
  console.log("userId", userId, "firstname", firstname, "lastname", lastname);
  try {
    let changedStatus = await editUserData(userId, firstname, lastname);
    console.log("UPDATED USER DATA", userId);
    res.status(200).send("Updated successfully ^_^");
  } catch (error) {
    console.log("ERROR: editUserData controller error: ", error)
    res.send("Internal server error");
  }
};