const db = require("../../../entities/Database");
const fs = require('fs');

module.exports = function async (req, res) {

    let dir = `./images/`;


    //searches for existing images dir with "images" name recursive
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    let oldPath = `./images/${req.file.filename}`    
    let newPath = `./images/${req.file.filename}.jpg`;

    fs.rename(oldPath, newPath, function (err) {
      if (err) throw err
      console.log('Successfully Moved File')
    })

    let data = {
        userId: req.body.userId,
        Name: req.file.filename,
        Mimetype: req.file.mimetype,
        Size: req.file.size,
        DateCreated: Date.now()
    }

    const sql ='INSERT INTO usersPics (userId, Filename, Mimetype, Size, DateCreated) VALUES (?,?,?,?,?)'
    let params = [data.userId, data.Name, data.Mimetype, data.Size, Date.now()]

    db.run(sql, params, function (err) {
        if (err){
            log("ERROR: addUserPic controller error: ", err)
            res.status(500).send("Internal server error")
            return;
        }
    });   

    res.status(200).json(req.file)
}