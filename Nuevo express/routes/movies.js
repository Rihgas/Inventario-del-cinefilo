const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


router.get('/peliculas', movieController.consultMovies);
router.get('/peliculas/:id', movieController.consultMovie);
router.post('/peliculas', movieController.createMovie);
router.put('/peliculas/:id', movieController.updateMovie);
router.delete('/peliculas/:id', movieController.deleteMovie);

module.exports = router;