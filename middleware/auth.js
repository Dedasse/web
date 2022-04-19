const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;

checkToken = async (req, res, next) => {
    console.log("checking token")
    try{
        const cookies = req.headers.cookie.split(";")
        const cookie = cookies.filter(cookie => cookie.includes("authToken")).toString()

        const theToken = cookie.slice(cookie.indexOf("=") + 1)

        console.log("token-" + theToken)
        if (!theToken) {
            return res.status(403).json({
                message: "Forbidden."
            })
        }

        jwt.verify(theToken, process.env.SECRET, (error, decoded) => {

            if (error) {
                return res.status(401).json({
                    message: "Unauthorized"
                })
            }
            req.userId = decoded.id
            User.findOne({where: {id: decoded.id}}).then(user => {
                req.userPrivilege = user.privilege

            })
            console.log("token ok")
            next();
        })
    }catch (error){
        return res.status(401).json({
            message: error
        })
    }

}

const authJwt = {
    checkToken: checkToken
}
module.exports = authJwt