const Movie = require('../models/Movie');


exports.createMovie = async(req, res) => {
  try {

    let data_movie;
    data_movie = new Movie(req.body);
    await data_movie.save();
    res.send(data_movie);   

  } catch (error) {
    
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soporte');

  }
}

exports.consultMovie = async(req, res) => {
  try {
    
    const data_movie = await Movie.findById(req.params.id);

    if(!data_movie){
      res.status(404).send('Ups...no hubo coincidencias')
    }
    res.json(data_movie)

  } catch (error) {
  
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soporte');

  }
}

exports.consultMovies = async(req, res) => {
  try {
    
    const data_movie = await Movie.find();
    res.json(data_movie);

  } catch (error) {
    
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soporte');
  }
}

exports.updateMovie = async(req, res) => {
  try {
    

    const { name_movie, genre, year, director, rate, date_watched, times_watched, image_mov } = req.body;
    let data_movie = await Movie.findById(req.params.id);

    if(!data_movie){
      res.status(404).send('Ups...no hubo coincidencias');
    }

    data_movie.name_movie = name_movie;
    data_movie.genre = genre;
    data_movie.year = year;
    data_movie.director = director;
    data_movie.rate = rate;
    data_movie.date_watched = date_watched;
    data_movie.times_watched = times_watched;
    data_movie.image_mov = image_mov;

    data_movie = await Movie.findOneAndUpdate({ _id: req.params.id }, data_movie, { new: true })
    res.json(data_movie);

  } catch (error) {
    
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soporte');
      
  }
}


exports.deleteMovie = async(req,res) => {
  try {

    let data_movie = await Movie.findByIdAndRemove({ _id: req.params.id })
    res.send("Eliminado satisfactoriamente");
    
  } catch (error) {
    
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soprte');
  }
}