const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const User = require('../../models/User');
const userData = require('../../seeds/userData');

// const Comment = require('../../models/Comment');
// const commentData = require('../../seeds/commentData');

function generateUniqueId() {
  return Date.now().toString();
}

app.post('/user', (req, res) => {
  const { username, email, password } = req.body;
  const id = generateUniqueId();

  const newUser = new User(id, username, email, password);

  userData.push(newUser);

  res.json(newUser);
});

// app.post('/comments', (req, res) => {
//   const { comment } = req.body;
//   const id = generateUniqueId();

//   const newComment = new Comment(id, comment);
//   commentData.push(newComment);

//   res.json(newComment);
// });

// app.put('/comments/:id', (req, res) => {
//     const commentId = req.params.id;
//     const updatedComment = req.body.updatedComment;
  
//     const commentToUpdate = commentData.find(comment => comment.id === commentId);
  
//     if (!commentToUpdate) {
//       return res.status(404).json({ error: 'Comment not found' });
//     }
  
//     commentToUpdate.comment = updatedComment;
  
//     res.json(commentToUpdate);
// });

// app.delete('/comments/:id', (req, res) => {
//     const commentId = req.params.id;
  
//     const commentIndex = commentData.findIndex(comment => comment.id === commentId);
  
//     if (commentIndex === -1) {
//       return res.status(404).json({ error: 'Comment not found' });
//     }
  
//     commentData.splice(commentIndex, 1);
  
//     res.status(204).send();
// });

