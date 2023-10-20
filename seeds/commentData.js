const { Comment } = require('../models');

const commentData = [
    {
        comment: "Example Comment"
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

module.exports = commentData;