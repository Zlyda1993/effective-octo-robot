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
    {
        title: "Wokini",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 1995, 
    },
    {
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 1996,
    },
    {
        title: "Message in a Bottle",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 1998,
    },
    {
        title: "A Walk to Remember",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 1999,
    },
    {
        title: "The Rescue",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2000,
    },
    {
        title: "A Bend in the Road",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2001,
    },
    {
        title: "Nights in Rodanthe",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2002,
    },
    {
        title: "The Guardian",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2003,
    },
    {
        title: "The Wedding",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2003,
    },
    {
        title: "Three Weeks With My Brother",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2004, 
    },
    {
        title: "True Believer",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2005, 
    },
    {
        title: "At First Sight",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2005,
    },
    {
        title: "Dear John",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2006,
    },
    {
        title: "The Choice",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2007,
    },
    {
        title: "The Lucky One",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2008,
    },
    {
        title: "The Last Song",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2009,
    },
    {
        title: "Safe Haven",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2010,
    },
    {
        title: "The Best of Me",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2011,
    },
    {
        title: "The Longest Ride",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2013,
    },
    {
        title: "See Me",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2015,
    },
    {
        title: "Two by Two",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2016,
    },
    {
        title: "Every Breath",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2018,
    },
    {
        title: "The Return",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2020,
    },
    {
        title: "The Wish",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2021,
    },
    {
        title: "Dreamland",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2022,
    },
    {
        title: "IT",
        author: "Stephen King",
        genre: "Fiction",
        year: 1986,
    },
    {
        title: "The Shining",
        author: "Stephen King",
        genre: "Fiction",
        year: 1977,
    },
    {
        title: "Misery",
        author: "Stephen King",
        genre: "Fiction",
        year: 1987,
    },
    {
        title: "The Dead Zone",
        author: "Stephen King",
        genre: "Fiction",
        year: 1979,
    },
    {
        title: "The Stand (1990)",
        author: "Stephen King",
        genre: "Fiction",
        year: 1990,
    },
    {
        title: "The Stand",
        author: "Stephen King",
        genre: "Fiction",
        year: 1978,
    },
    {
        title: "Carrie",
        author: "Stephen King",
        genre: "Fiction",
        year: 1974,
    },
    {
        title: "11/22/63",
        author: "Stephen King",
        genre: "Fiction",
        year: 2011,
    },
    {
        title: "Pet Sematary",
        author: "Stephen King",
        genre: "Fiction",
        year: 1983,
    },
    {
        title: "'Salem's Lot",
        author: "Stephen King",
        genre: "Fiction",
        year: 1975,
    },
];

const seedBook = () => Book.bulkCreate(bookData)

module.exports = seedBook;
