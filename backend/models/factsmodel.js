const db = require('../database/index');

class SpaceFact {
  static getAll(callback) {
    const sql = 'SELECT * FROM space_facts';
    db.query(sql, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static getById(id, callback) {
    const sql = 'SELECT * FROM space_facts WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  }

  static create(newFact, callback) {
    const { fact, image_url, source, category } = newFact;
    const sql = 'INSERT INTO space_facts (fact, image_url, source, category) VALUES (?, ?, ?, ?)';
    db.query(sql, [fact, image_url, source, category], (err, result) => {
      if (err) throw err;
      callback(result.insertId);
    });
  }

  static update(id, updatedFact, callback) {
    const { fact, image_url, source, category } = updatedFact;
    const sql = 'UPDATE space_facts SET fact = ?, image_url = ?, source = ?, category = ? WHERE id = ?';
    db.query(sql, [fact, image_url, source, category, id], (err) => {
      if (err) throw err;
      callback();
    });
  }

  static delete(id, callback) {
    const sql = 'DELETE FROM space_facts WHERE id = ?';
    db.query(sql, [id], (err) => {
      if (err) throw err;
      callback();
    });
  }
}

module.exports = SpaceFact;
