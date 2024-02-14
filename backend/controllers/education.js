const education=require('../models/education.js')

const getAlledu = (req, res) => {
    education.getAll((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const getOneedu = (req, res) => {
    const id = req.params.id;
    education.getOne(id, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (!result) {
          res.status(404).send("edu not found");
        } else {
          res.status(200).json(result);
        }
      }
    });
  };
  

const createedu = (req, res) => {
    education.create(req.body, (err, result) => {
        if (err) {
            res.status(409).send(err);
        } else {
            res.status(201).send(result);
        }
    });
}

const deleteedu = (req, res) => {
    education.remove(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
}

const updateedu = (req, res) => {
    education.update(req.params.id, req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (!result) {
            res.status(404).send("edu is not found");
        } else {
            res.status(200).send();
        }
    });
}



module.exports = {
    getAlledu,
    getOneedu,
    createedu,
    deleteedu,
    updateedu,
   
};
