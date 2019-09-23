const { Schema, model } = require('mongoose');

const VideoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    recommendedBy: {
        type: String,
        required: true
    },
    watched: Boolean
},{
    timestamps: true
});

module.exports = model("Video", VideoSchema);