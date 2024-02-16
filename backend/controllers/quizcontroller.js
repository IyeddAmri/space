const QuizQuestion = require('../models/quizmodel');

const quizQuestionController = {
  getAllQuestions: (req, res) => {
    QuizQuestion.getAll((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(200).json(results);
      }
    });
  },
  
  getQuestionById: (req, res) => {
    const id = req.params.id;
    QuizQuestion.getById(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (!result) {
        res.status(404).json({ message: 'Question not found' });
      } else {
        res.status(200).json(result);
      }
    });
  },
  
  createQuestion: (req, res) => {
    const questionData = req.body;
    console.log(questionData);
    QuizQuestion.create(questionData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Question created successfully' });
      }
    });
  },
  
  updateQuestion: (req, res) => {
    const id = req.params.id;
    const questionData = req.body;
    QuizQuestion.update(id, questionData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Question not found' });
      } else {
        res.status(200).json({ message: 'Question updated successfully' });
      }
    });
  },
  
  deleteQuestion: (req, res) => {
    const id = req.params.id;
    QuizQuestion.delete(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Question not found' });
      } else {
        res.status(200).json({ message: 'Question deleted successfully' });
      }
    });
  }
};

module.exports = quizQuestionController;
