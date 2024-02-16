const express = require('express');
const router = express.Router();
const spaceFactsController = require('../controllers/factscontroller');

// Routes
router.get('/', spaceFactsController.getAllSpaceFacts);
router.get('/:id', spaceFactsController.getSpaceFactById);
router.post('/', spaceFactsController.createSpaceFact);
router.put('/:id', spaceFactsController.updateSpaceFact);
router.delete('/:id', spaceFactsController.deleteSpaceFact);

module.exports = router;
