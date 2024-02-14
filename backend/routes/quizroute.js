const express = require('express');
const quizQuestionController = require('../controllers/quizcontroller');

const router = express.Router();

router.get('/questions', quizQuestionController.getAllQuestions);
router.get('/questions/:id', quizQuestionController.getQuestionById);
router.post('/questions', quizQuestionController.createQuestion);
router.put('/questions/:id', quizQuestionController.updateQuestion);
router.delete('/questions/:id', quizQuestionController.deleteQuestion);

module.exports = router;
