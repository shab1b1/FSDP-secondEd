const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', (req, res) => {
  const { title, description, authority, url } = req.body;
  db.query(
    'INSERT INTO cop (title, description, authority, url) VALUES (?, ?, ?, ?)',
    [title, description, authority, url],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, ...req.body });
    }
  );
});

// READ ALL
router.get('/', (req, res) => {
  db.query('SELECT * FROM cop', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// READ ONE
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM cop WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  const { title, description, authority, url } = req.body;
  db.query(
    'UPDATE cop SET title=?, description=?, authority=?, url=? WHERE id=?',
    [title, description, authority, url, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: req.params.id, ...req.body });
    }
  );
});

// DELETE
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM cop WHERE id=?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

module.exports = router;