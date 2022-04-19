
const db = require("../models");
const Image = db.files;
const date = () => {
    var d = new Date;
    d.setMonth(d.getMonth()+1)
    d.setHours(23, 59, 59)
    return d
}
const uploadFiles = async (req, res) => {
    //const currentUser = req.cookies["currentUser"]
    //console.log("!", currentUser)
    try {
        if (req.file === undefined) {
            return res.send(`You must select a file.`);
        }
        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            filename: req.file.filename,
            uploadedBy: 29,
            expireTime: (date())
        }).then(() => {
            //res.redirect("/api/loadpdf")
            console.log("success")
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};

const updateFile = async (req, res) => {
    console.log("updatin time and/or date")
    let fileToUpdate = await Image.findOne({where: {id: req.body.file.id}})
    fileToUpdate.showTime =  req.body.file.showTime
    fileToUpdate.expireTime = req.body.file.expireTime
    await fileToUpdate.save()
    //await Image.update(fileToUpdate,{where:{ id: req.body.file.id}})
    return console.log("aww")
}
module.exports = {
    uploadFiles,
    updateFile
};
