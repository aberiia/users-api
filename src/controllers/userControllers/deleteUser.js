const db = require("../../../entities/Database");

function deleteUser(id) {
  console.log("USER ID", id);
  return new Promise((resolve, reject) => {
    db.all(`DELETE FROM users WHERE id= ${id}`, (err, row) => {
      if (err) {
        console.log(err);
        reject("Cannot find user with this id");
      }
        resolve `User deleted successfully ^_^`;
    });
  });
}

module.exports = async (req, res) => {
  const { userId } = req.params;
  try {
    let deletedUser = await deleteUser(userId);
    res.send(deletedUser);
  } catch (error) {
    console.log("ERROR: deleteUser controller error: ", error)
    res.status(500).send("Internal server error");
  }
};
