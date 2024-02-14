const db = require('../database/index');

const QuizQuestion = {
  getAll: (callback) => {
    db.query('SELECT * FROM quiz_questions', callback);
  },
  
  getById: (id, callback) => {
    db.query('SELECT * FROM quiz_questions WHERE id = ?', [id], callback);
  },
  
  create: (questionData, callback) => {
    db.query('INSERT INTO quiz_questions SET ?', questionData, callback);
  },
  
  update: (id, questionData, callback) => {
    db.query('UPDATE quiz_questions SET ? WHERE id = ?', [questionData, id], callback);
  },
  
  delete: (id, callback) => {
    db.query('DELETE FROM quiz_questions WHERE id = ?', [id], callback);
  }
};

module.exports = QuizQuestion;
