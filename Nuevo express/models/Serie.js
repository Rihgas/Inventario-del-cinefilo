const mongoose = require('mongoose');

const serieSchema = mongoose.Schema({
  name_serie: {
    type: String,
    require: true
  },
  genre: {
    type: String,
    require: true
  },
  seasons: {
    type: Number,
    require: true   
  },
  episodes: {
    type: Number,
    require: true
  },
  eps_watched: {
    type: Number,
    require: true
  },
  cre_year: {
    type: String,
    require: true
  },
  creator: {
    type: String,
  },
  rate: {
    type:  Number,
    require: true
  },
  last_date_watched: {
    type: String,
    require: true
  },
  image_ser: {
    type: String,
    default: 'https://familyandmedia.eu/wp-content/uploads/2017/07/52889_ppl.jpg'
  },
  date_cre: {
    type: Date,
    default: Date.now()
  }
})


module.exports = mongoose.model('serie', serieSchema)