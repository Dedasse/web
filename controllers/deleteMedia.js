const db = require("../models");
const File = db.files


const deleteMedia = async (req, res) => {
    const fs = require("fs")
    const path = "../client/public/Files/"
    console.log("deleting media usr: " + req.userPrivilege)
    File.findOne({where: {id: req.body.mediaId}})
        .then(image => {
            try {
                image.destroy();
                fs.unlink(path + req.body.name, function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                    console.log('File deleted!');
                });
                return res.status(200).json({
                    message: "File deleted"
                })
                
            }catch (error){
                return res.status(409).json({
                    message: "Deleting error -- " + error
                })
            }
        })
}
module.exports = {
    deleteMedia
}