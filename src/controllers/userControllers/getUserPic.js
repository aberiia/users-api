const path = require('path');
const fs = require('fs');

const ABSOLUTE_PATH_TO_IMAGES_FOLDER = process.env.ABSOLUTE_PATH_TO_IMAGES_FOLDER;

module.exports = (req, res) => {
    let dir = `../../../images/`;
    const fullPath = `${dir}${req.query.path}`;
  
        fs.access(`${ABSOLUTE_PATH_TO_IMAGES_FOLDER}${req.query.path}`, function(error){
            if (error) {
                console.log("Файл не найден", error);
                res.status(404).send("Not found")
            } else {
                res.status(200).sendFile(path.resolve(__dirname, `${dir}${req.query.path}`));
            }
        });
     
     
};