const { Book } = require('../models')

const bookData = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "JK Rowling",
        genre: "Fiction",
        year: "1997",
        // description: 
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "JK Rowling",
        genre: "Fiction",
        year: "1998",
        // description:
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "JK Rowling",
        genre: "Fiction",
        year: "1999",
        // description:
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "JK Rowling",
        genre: "Fiction",
        year: "2000",
        // description:
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "JK Rowling",
        genre: "Fiction",
        year: "2003",
        // description:
    },
    {
        title: "Harry Potter and the Half Blood Prince",
        author: "JK Rowling",
        genre: "Fiction",
        year: "2005",
        // description:
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "JK Rowling",
        genre: "Fiction",
        year: "2007",
        // description:
    },
    {
        title: "Moneyball: The Art of Winning an Unfair Game",
        author: "Michael Lewis",
        genre: "Non-Fiction",
        year: "2003",
        // description:
    },
    {
        title: "Friday Night Lights: A Town, a Team, and a Dream",
        author: "H. G. Bassinger",
        genre: "Non-Fiction",
        year:  "1990",
        // description:
    },
    {
        title: "Into Thin Air",
        author: "Jon Krakauer",
        genre: "Non-Fiction",
        year: "1997",
        // description:
    },
    {
        title: "The Blind Side: Evolution of a Game",
        author: "Michael Lewis",
        genre: "Non-Fiction",
        year: "2006",
        // description:
    },
    {
        title: "Seabiscuit: An American Legend",
        author: "Laura Hillenbrand",
        genre: "Non-Fiction",
        year: "1999",
        // description:
    },

];

const seedBook = () => Book.bulkCreate(bookData)

module.exports = seedBook;


// {
//     "title": 
//     "author":
//     "genre":
//     "year":
// },