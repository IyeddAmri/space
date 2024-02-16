const SpaceFact = require('../models/factsmodel');

exports.getAllSpaceFacts = (req, res) => {
  SpaceFact.getAll((facts) => {
    res.json(facts);
  });
};

exports.getSpaceFactById = (req, res) => {
  const id = req.params.id;
  SpaceFact.getById(id, (fact) => {
    res.json(fact);
  });
};

exports.createSpaceFact = (req, res) => {
  const newFact = req.body;
  SpaceFact.create(newFact, (insertId) => {
    res.status(201).json({ id: insertId, message: 'Fact created successfully' });
  });
};

exports.updateSpaceFact = (req, res) => {
  const id = req.params.id;
  const updatedFact = req.body;
  SpaceFact.update(id, updatedFact, () => {
    res.json({ message: 'Fact updated successfully' });
  });
};

exports.deleteSpaceFact = (req, res) => {
  const id = req.params.id;
  SpaceFact.delete(id, () => {
    res.json({ message: 'Fact deleted successfully' });
  });
};
