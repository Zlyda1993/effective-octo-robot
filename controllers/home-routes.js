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
          genre
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/book/:id', withAuth, async (req, res) => {
    try {
      const dbBookData = await Book.findByPk(req.params.id, {
        include: [
          {
            model: Shelf,
            attributes: ['genre'], 
          },
        ],
      });
  
      const book = dbBookData.get({ plain: true });
  
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
  