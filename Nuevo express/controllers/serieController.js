const Serie = require('../models/Serie');


exports.createSerie = async(req, res) => {
  try {

    let data_serie;
    data_serie = new Serie(req.body);
    await data_serie.save();
    res.send(data_serie);   

  } catch (error) {
    
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soporte');

  }
}

exports.consultSerie = async(req, res) => {
  try {
    
    const data_serie = await Serie.findById(req.params.id);

    if(!data_serie){
      res.status(404).send('Ups...no hubo coincidencias')
    }
    res.json(data_serie)

  } catch (error) {
  
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soporte');

  }
}

exports.consultSeries = async(req, res) => {
  try {
    
    const data_serie = await Serie.find();
    res.json(data_serie);

  } catch (error) {
    
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soporte');
  }
}

exports.updateSerie = async(req, res) => {
  try {
    

    const { name_serie, genre, seasons, episodes, cre_year, creator, rate, eps_watched, last_date_watched, image_ser } = req.body;
    let data_serie = await Serie.findById(req.params.id);

    if(!data_serie){
      res.status(404).send('Ups...no hubo coincidencias');
    }

    data_serie.name_serie = name_serie;
    data_serie.genre = genre;
    data_serie.seasons = seasons;
    data_serie.episodes = episodes;
    data_serie.cre_year = cre_year;
    data_serie.creator = creator;
    data_serie.rate = rate;
    data_serie.eps_watched = eps_watched;
    data_serie.last_date_watched = last_date_watched;
    data_serie.image_ser = image_ser;

    data_serie = await Serie.findOneAndUpdate({ _id: req.params.id }, data_serie, { new: true })
    res.json(data_serie);

  } catch (error) {
    
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soporte');
      
  }
}


exports.deleteSerie = async(req,res) => {
  try {

    let data_serie = await Serie.findByIdAndRemove({ _id: req.params.id })
    res.send("Eliminado satisfactoriamente", data_serie);
    
  } catch (error) {
    
    console.log(error);
    res.status(500).send('Ups...hubo un error, comuniquese con soprte');
  }
}