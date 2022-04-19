const db = require("../models");

const PollRate = db.polls
const createPoll = async (req, res) => {
    console.log("Creating poll : " + req.body.question)

    try {
        PollRate.create({
            question: req.body.question,
        })
        return res.status(200).json({
            message: "Poll created"
        })
    } catch (error) {
        return res.send(`Error-  ${error}`);
    }

}

const dislikePoll = async (req, res) => {
    const disliked = await PollRate.findOne({where: {id: req.body.id}})
    disliked.dislikes += 1;
    await disliked.save();

    return res.status(200).json({
        message: "Disliked"
    })

}

const likePoll = async (req, res) => {
    const liked = await PollRate.findOne({where: {id: req.body.id}})
    liked.likes += 1;
    await liked.save();

    return res.status(200).json({
        message: "Liked"
    })

}

const loadPollVote = async (req, res) => {
    PollRate.findAll().then(files => {
        res.json(files)
    })

}


module.exports = {
    createPoll,
    dislikePoll,
    likePoll,
    loadPollVote,
}