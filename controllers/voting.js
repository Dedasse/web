const db = require("../models");

const Rate = db.ratings
const rateMedia = async (req, res) => {
    console.log("Liking media id: " + req.body.mediaID, " by user: " + req.userId)

    if (req.body.ratingType === "like") {
        // if liked
        const liked = await Rate.findOne({where: {ratedBy: req.userId, mediaId: req.body.mediaID, ratingType: "like"}})
        if (liked) {
            await liked.destroy()
            return res.status(200).json({
                message: "Like deleted"
            })
        }
        const disliked = await Rate.findOne({where: {ratedBy: req.userId} && {mediaId: req.body.mediaID} && {ratingType: "dislike"}})
        if (disliked) {
            await disliked.destroy()
        }
    } else if (req.body.ratingType === "dislike") {
        const disliked = await Rate.findOne({where: {ratedBy: req.userId} && {mediaId: req.body.mediaID} && {ratingType: "dislike"}})
        if (disliked) {
            return res.status(200).json({
                message: "Dislike deleted"
            })
        }
        const liked = await Rate.findOne({where: {ratedBy: req.userId, mediaId: req.body.mediaID, ratingType: "like"}})
        if (liked) {
            await liked.destroy()

        }

    }
    try {
        Rate.create({
            mediaId: req.body.mediaID,
            ratingType: req.body.ratingType,
            ratedBy: req.userId
        })
        return res.status(200).json({
            message: "Rating: " + req.body.ratingType
        })
    } catch (error) {
        return res.send(`Rating error-  ${error}`);
    }

}

module.exports = {
    rateMedia,
}