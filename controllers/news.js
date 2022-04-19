const db = require("../models");

const News = db.news
const createNews = async (req, res) => {
    console.log("creating news")

    try {
        News.create({
            question: req.body.question,
        })
        return res.status(200).json({
            message: "created"
        })
    } catch (error) {
        return res.send(`Error with creating news-  ${error}`);
    }

}

const loadNews = async (req,res) => {
    console.log("loading news")
    News.findAll().then(files => {
        res.json(files)
    })

}

module.exports = {

    loadNews,
}