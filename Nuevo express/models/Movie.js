const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name_movie: {
    type: String,
    require: true
  },
  genre: {
    type: String,
    require: true
  },
  year: {
    type: Number,
    require: true
  },
  director: {
    type: String,
  },
  rate: {
    type:  Number,
    require: true
  },
  date_watched: {
    type: String,
    require: true
  },
  times_watched: {
    type: Number,
    require: true
  },
  image_mov: {
    type: String,
    default: 'https://www.elcineenlasombra.com/wp-content/uploads/2018/10/pelicula-rodar-FB.jpg'
  },
  date_cre: {
    type: Date,
    default: Date.now()
  }
})


module.exports = mongoose.model('movie', movieSchema)