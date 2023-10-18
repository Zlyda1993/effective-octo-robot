const User = require('./User');
const Shelf = require('./Shelf');
const Book= require('./Book');

Shelf.hasMany(Book, {
  foreignKey: 'gallery_id',
});

Book.belongsTo(Shelf, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Shelf, Book };
