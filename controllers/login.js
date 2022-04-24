const db = require("../models");
const User = db.users;
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    User.findOne({where: {email: req.body.email}}).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Login not found"
            })
        }
        const correctPassword = bcrypt.compareSync(req.body.password, user.password)
        if (!correctPassword) {
            return res.status(401).json({
                message: "Login or password incorrect"
            })
        }
        const currentUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            privilege: user.privilege,
        }
        const theToken = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: '1h'});
        res.cookie('currentUser', currentUser, {maxAge: 900000, secure: false})
        res.cookie('authToken', theToken, {maxAge: 900000, httpOnly: true})
        res.status(200).json({
            // token: theToken,
            message: "ok"
        })
    }).catch(error => {
        res.status(500).json({
            message: error.message
        })
    })

};

module.exports = {
    loginUser,
};