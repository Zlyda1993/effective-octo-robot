const { Book } = require('../models')

const bookData = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "JK Rowling",
        genre: "Fiction",
        year: 1997,
        filename: "hp1.jpg"
        // description: 
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "JK Rowling",
        genre: "Fiction",
        year: 1998,
        filename: "../public/images/book_covers/hp2.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "JK Rowling",
        genre: "Fiction",
        year: 1999,
        filename: "hp3.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "JK Rowling",
        genre: "Fiction",
        year: 2000,
        filename: "hp4.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "JK Rowling",
        genre: "Fiction",
        year: 2003,
        filename: "hp5.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Half Blood Prince",
        author: "JK Rowling",
        genre: "Fiction",
        year: 2005,
        filename: "hp6.jpg"
        // description:
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "JK Rowling",
        genre: "Fiction",
        year: 2007,
        filename: "hp7.jpg"
        // description:
    },
    {
        title: "Moneyball: The Art of Winning an Unfair Game",
        author: "Michael Lewis",
        genre: "Non-Fiction",
        year: 2003,
        filename: "mb.jpg"
        // description:
    },
    {
        title: "Friday Night Lights: A Town, a Team, and a Dream",
        author: "H. G. Bassinger",
        genre: "Non-Fiction",
        year:  1990,
        filename: "fnl.jpg"
        // description:
    },
    {
        title: "Into Thin Air",
        author: "Jon Krakauer",
        genre: "Non-Fiction",
        year: 1997,
        filename: "ita.jpg"
        // description:
    },
    {
        title: "The Blind Side: Evolution of a Game",
        author: "Michael Lewis",
        genre: "Non-Fiction",
        year: 2006,
        filename: "bs.jpg"
        // description:
    },
    {
        title: "Seabiscuit: An American Legend",
        author: "Laura Hillenbrand",
        genre: "Non-Fiction",
        year: 1999,
        filename: "seab.jpg"
        // description:
    },
    {
        title: "Wokini",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 1995,
        filename: "wok.jpg"
    },
    {
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 1996,
        filename: "np.jpg"
    },
    {
        title: "Message in a Bottle",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 1998,
        filename: "miab.jpg"
    },
    {
        title: "A Walk to Remember",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 1999,
        filename: "awtr.jpg"
    },
    {
        title: "The Rescue",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2000,
        filename: "resc.jpg"
    },
    {
        title: "A Bend in the Road",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2001,
        filename: "abitr.jpg"
    },
    {
        title: "Nights in Rodanthe",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2002,
        filename: "nir.jpg"
    },
    {
        title: "The Guardian",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2003,
        filename: "guard.jpg"
    },
    {
        title: "The Wedding",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2003,
        filename: "wedd.jpg"
    },
    {
        title: "Three Weeks With My Brother",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2004,
        filename: "twwmb.jpg"
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
        filename: "afs.filename"
    },
    {
        title: "Dear John",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2006,
        filename: "dearj.jpg"
    },
    {
        title: "The Choice",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2007,
        filename: "choice.jpg"
    },
    {
        title: "The Lucky One",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2008,
        filename: "tlo.jpg"
    },
    {
        title: "The Last Song",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2009,
        filename: "tls.jpg"
    },
    {
        title: "Safe Haven",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2010,
        filename: "safeh.jpg"
    },
    {
        title: "The Best of Me",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2011,
        filename: "tbom.jpg"
    },
    {
        title: "The Longest Ride",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2013,
        filename: "longestr.jpg"

    },
    {
        title: "See Me",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2015,
        filename: "seeme.jpg"
    },
    {
        title: "Two by Two",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2016,
        filename: "twobytwo.jpg"
    },
    {
        title: "Every Breath",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2018,
        filename: "everyb.jpg"
    },
    {
        title: "The Return",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2020,
        filename: "return.jpg"
    },
    {
        title: "The Wish",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2021,
        filename: "wish.jpg"
    },
    {
        title: "Dreamland",
        author: "Nicholas Sparks",
        genre: "Fiction",
        year: 2022,
        filename: "dreamland.jpg"
    },
    {
        title: "IT",
        author: "Stephen King",
        genre: "Fiction",
        year: 1986,
        filename: "it.jpg"
    },
    {
        title: "The Shining",
        author: "Stephen King",
        genre: "Fiction",
        year: 1977,
        filename: "shining.jpg"
    },
    {
        title: "Misery",
        author: "Stephen King",
        genre: "Fiction",
        year: 1987,
        filename: "misery.jpg"
    },
    {
        title: "The Dead Zone",
        author: "Stephen King",
        genre: "Fiction",
        year: 1979,
        filename: "deadzone.jpg"
    },
    {
        title: "The Stand (1990)",
        author: "Stephen King",
        genre: "Fiction",
        year: 1990,
        filename: "stand.jpg"
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
        filename: "carrie.jpg"
    },
    {
        title: "11/22/63",
        author: "Stephen King",
        genre: "Fiction",
        year: 2011,
        filename: "112263.jpg"
    },
    {
        title: "Pet Sematary",
        author: "Stephen King",
        genre: "Fiction",
        year: 1983,
        filename: "petsem.jpg"
    },
    {
        title: "'Salem's Lot",
        author: "Stephen King",
        genre: "Fiction",
        year: 1975,
        filename: "salems.jpg"
    },
];

const seedBook = () => Book.bulkCreate(bookData)

module.exports = seedBook;
