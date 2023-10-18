const User = require('./User');
const Shelf = require('./Shelf');
const Book= require('./Book');

Shelf.hasMany(Book, {
  foreignKey: 'book_id',
});

Book.belongsTo(Shelf, {
  foreignKey: 'book_id',
});

module.exports = { User, Shelf, Book };
