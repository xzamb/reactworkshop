const Video = require('../models/Video');

module.exports = {
    async store(req, res){
        const { title, type, recommendedBy } = req.body;

        const video = await Video.findOne({title});
        if(video){
            return res.json(video);
        }

        const response = await Video.create({title, type, recommendedBy, watched: false});
        return res.json(response);
    },

    async index(req, res){
        const response = await Video.find({watched: false});
        return res.json(response);
    },

    async update(req, res){
        const { id } = req.params;

        await Video.updateOne({_id: id}, {watched: true});
        return res.json({response: true});
    }
}