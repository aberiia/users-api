const db = require("../../../entities/Database");
const jwt = require('jsonwebtoken');
const tokenKey = '1a2b-3c4d-5e6f-7g8h'
module.exports = async (req, res) => {
    const login = req.body.username;
    const password = req.body.password;
    console.log('password', typeof password)
    db.all(`SELECT userId, email, password FROM users where email ="${login}"`, (err,row) => {
        if (
              password === row[0].password
            ) {
              return res.status(200).json({
                // id: row.id,
                login: login,
                token: jwt.sign({ id: row[0].userId }, tokenKey),
              })
            }
        
          return res.status(404).json({ message: 'User not found' })
})};