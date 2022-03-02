const express = require('express');
const router = express.Router();
const serieController = require('../controllers/serieController');


router.get('/series', serieController.consultSeries);
router.get('/series/:id', serieController.consultSerie);
router.post('/series', serieController.createSerie);
router.put('/series/:id', serieController.updateSerie);
router.delete('/series/:id', serieController.deleteSerie);

module.exports = router;