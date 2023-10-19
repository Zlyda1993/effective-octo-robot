const { Book } = require('../models')

const bookData = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "JK Rowling",
        genre: "Fiction",
        year: 1997,
        img: "hp1.jpg"
        // description: 
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "JK Rowling",
        genre: "Fiction",
        year: 1998,
        img: "hp2.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "JK Rowling",
        genre: "Fiction",
        year: 1999,
        img: "hp3.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "JK Rowling",
        genre: "Fiction",
        year: 2000,
        img: "hp4.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "JK Rowling",
        genre: "Fiction",
        year: 2003,
        img: "hp5.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Half Blood Prince",
        author: "JK Rowling",
        genre: "Fiction",
        year: 2005,
        img: "hp6.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "JK Rowling",
        genre: "Fiction",
        year: 2007,
        img: "hp7.jpg"
        // description:
    },
    {
        title: "Moneyball: The Art of Winning an Unfair Game",
        author: "Michael Lewis",
        genre: "Non-Fiction",
        year: 2003,
        img: "mb.jpg"
        // description:
    },
    {
        title: "Friday Night Lights: A Town, a Team, and a Dream",
        author: "H. G. Bassinger",
        genre: "Non-Fiction",
        year:  1990,
        img: "fnl.jpg"
        // description:
    },
    {
        title: "Into Thin Air",
        author: "Jon Krakauer",
        genre: "Non-Fiction",
        year: 1997,
        img: "ita.jpg"
        // description:
    },
    {
        title: "The Blind Side: Evolution of a Game",
        author: "Michael Lewis",
        genre: "Non-Fiction",
        year: 2006,
        img: "bs.jpg"
        // description:
    },
    {
        title: "Seabiscuit: An American Legend",
        author: "Laura Hillenbrand",
        genre: "Non-Fiction",
        year: 1999,
        img: "seab.jpg"
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