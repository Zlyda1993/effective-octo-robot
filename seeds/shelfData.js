const { Shelf } = require('../models')

const shelfData = [
    {
        id: 1,
        genre: "Fiction",
    },
    {
        id: 2,
        genre: "Non-Fiction",
    },
];

const seedShelf = () => Shelf.bulkCreate(shelfData);

module.exports = seedShelf;