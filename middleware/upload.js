const multer = require("multer");

const imageFilter = (req, file, cb) => {
    console.log("uploading file")
    console.log(file)
    if (file.mimetype.startsWith("image")||
        file.mimetype.startsWith("video")||
        file.mimetype.startsWith("application"))
    {
        cb(null, true);
    } else {
        cb("Please upload only media.", false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../client/public/files/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const uploadFile = multer({storage: storage, fileFilter: imageFilter});
module.exports = uploadFile;
