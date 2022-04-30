const router = require('express').Router();
const uploadController = require("../controllers/upload");
const registerController = require("../controllers/register");
const upload = require("../middleware/upload")
const {loginUser} = require("../controllers/login");
const {authJwt} = require("../middleware");
const {loadVideos, loadPdf} = require("../controllers/download");

const {rateMedia,} = require("../controllers/voting");
const {deleteMedia} = require("../controllers/deleteMedia");
const {createPoll, loadPollVote, dislikePoll, likePoll, deletePoll} = require("../controllers/pollvoting");
const {loadNews, createNews} = require("../controllers/news");


router.all('*', function(req, res, next) {
    const origin = req.headers.origin;
    const allowedOrigins = [
        'http://localhost:3000',
        'https://192.168.50.189',
        'https://192.168.50.189:3000',
        'https://192.168.50.189:3003',
        'https://192.168.50.189:3006'];
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', "true")
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");    next();
});


router.post("/upload", upload.single("file"), uploadController.uploadFiles);
router.put("/update",uploadController.updateFile)
router.post("/register", registerController.registerUser);
router.post("/login",  loginUser)
router.post("/api/createpoll", createPoll)
router.post("/loadpollvote", loadPollVote)
router.post("/upvote", authJwt.checkToken, rateMedia);
router.post("/api/vote/dislike", dislikePoll)
router.post("/api/vote/like", likePoll)
router.post("/api/createnews", createNews)

router.get('/checkuser', authJwt.checkToken);
router.get("/api/loadvideos", loadVideos )
router.get("/api/loadpdf", loadPdf)
router.get("/api/loadnews", loadNews)
router.delete("/api/delete", deleteMedia)
router.delete("/api/vote/delete", deletePoll)



module.exports = router;