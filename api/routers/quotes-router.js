const express = require('express');

const Quotes = require('../models/quotes-model');

const router = express.Router();

router.get('/', (req, res) => {
  Quotes.find()
    .then(quotes => {
      res.status(200).json(quotes);
    })
    .catch(err => {
      res.status(500).json({
        message: `Failed to GET /api/quotes: ${err.message}`,
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  
  Quotes.findById(id)
    .then(quote => {
      res.status(200).json(quote);
    })
    .catch(err => {
      res.status(500).json({
        message: `Failed to GET /api/quotes/:id: ${err.message}`,
      });
    });
});

// Etc.

module.exports = router;