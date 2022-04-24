require('dotenv').config()
const Sequelize = require('sequelize')

// noinspection JSValidateTypes
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.files = require("./file.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.ratings = require("./rating.model")(sequelize, Sequelize)
db.files = require("./file.model")(sequelize, Sequelize);
db.polls = require("./poll.model.js")(sequelize, Sequelize);
db.news = require("./news.model")(sequelize, Sequelize);

module.exports = db;
