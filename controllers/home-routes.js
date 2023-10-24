const router = require('express').Router();
const { Shelf, Book } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        const dbShelfData = await Shelf.findAll({
            include: [
                {
                    model: Book,
                    attributes: ['title', 'genre'],
                },
            ],
        });

        const genre = dbShelfData.map((shelf) =>
            shelf.get({ plain: true })
        );

        res.render('homepage', {
          genre,
          loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/books/:genre', withAuth, async (req, res) => {
  const bookData = await Book.findAll({
      where: { genre: req.params.genre },
  });

  const books = bookData.map((book) => book.get({ plain: true }));

  res.render('shelf', { 
    books,
    logged_in: req.session.logged_in
  });
});

router.get('/books/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);

    const book = bookData.get({ plain: true });

    res.render('book', { book, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  