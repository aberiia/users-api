const db = require("../../entities/Database");
const getUsersCount = require("./getUsersCount");

function getPaginatedUsers(offset, limit) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users LIMIT ${offset}, ${limit}`, (err, row) => {
      if (err) reject("Cannot find users");
      resolve(row);
    });
  });
}

module.exports = async (req, res) => {
  const { limit, offset } = req.params;
  let convertedOffset = +offset;
  let convertedLimit = +limit;

  try {
    let usersCountObj = await getUsersCount();
    let users = await getPaginatedUsers(offset, limit);

    let count = usersCountObj[0].count;
    let lastUsersAmount = Math.round(count % convertedLimit);

    if (users.length === 0) {
      res.status(404).send("Cannot find users");
    }
    // if 3 + 6 > 8 , limit becomes 2, the remainder when usersAmount(8) is divided by limit(3)
    else if (convertedLimit + convertedOffset >= count) {
      res.status(200).send({
        users,
        count,
        isEnd: true,
        limit: lastUsersAmount,
        offset: convertedOffset,
      });
      // otherwise we increase the offset by the limit amount
    } else {
      res.status(200).send({
        users,
        count,
        isEnd: false,
        limit: convertedLimit,
        offset: convertedOffset + convertedLimit,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
