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
const deletePoll = async (req, res) => {
    console.log(req)
    try {
        PollRate.findOne({where: {id: req.body.id}})
            .then(poll => {
                poll.destroy();
                return res.status(200).json({
                    message: "Poll deleted"
                })

            })
    }catch (error){
        return res.status(409).json({
            message: "Poll deleting error -- " + error
        })
    }
}
const loadPollVote = async (req, res) => {
    PollRate.findAll({ limit: 10, order: [['updatedAt', 'DESC']]}).then(files => {
        res.json(files)
    })

}


module.exports = {
    createPoll,
    dislikePoll,
    likePoll,
    loadPollVote,
    deletePoll,
}