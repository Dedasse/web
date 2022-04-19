const db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Files = db.files

const loadVideos = async (req,res) => {
    Files.findAll({where: {type: {[Op.like]: `%video%`}}}).then(files => {
        res.json(files)
    })
}

const loadPdf = async (req,res) => {

    Files.findAll({where: {type: {[Op.like]: `%pdf%`}}}).then(files => {

        res.json(files)
    })
}


module.exports = {
    loadVideos,
    loadPdf
}