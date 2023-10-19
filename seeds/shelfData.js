const { Shelf } = require('../models')

const shelfData = [
    {
        genre: "Fiction"
    },
    {
        genre: "Non-Fiction"
    },
];

const seedShelf = () => Shelf.bulkCreate(shelfData)

module.exports = seedShelf;