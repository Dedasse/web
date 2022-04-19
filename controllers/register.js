const db = require("../models");

const User = db.users;
const bcrypt = require('bcryptjs');
const registerUser = async (req, res) => {
    console.log(`Registering with username- ${req.body.name} email- ${req.body.email} pass- ${req.body.password}`);

    const emailExists = await User.findOne({ where: { email: req.body.email } });
    if (emailExists ) {
        return res.status(409).json({
            message: "Email already registered"
        })
    }
    try {
        User.findOne()
        const hashPass = await bcrypt.hash(req.body.password, 12);
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPass,
        })
        return res.status(200).json({
            message: "Registered successfully"
        })

    } catch (error) {
        return res.send(`Registering error--  ${error}`);
    }
};

module.exports = {
    registerUser,
};