var mongoose = require('mongoose');



var commentSchema = new.mongoose.Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var videoSchema = new.mongoose.Schema({
    title: String,
        
    
    author: String,
    description: String,
    likes : { type: Number, default : 0},
    date: {Date, default: Date.now},
    comments: [commentSchema]
    // video
});

var Videos = mongoose.model('Video', videoSchema);

module.exports = Videos;