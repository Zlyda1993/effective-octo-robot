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
                }
            ]
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
  const books = await Book.findAll({
      where: { genre: req.params.genre },
  });

  res.render('shelf', { books });
});

  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  