try {
  const express = require('express');
  const conectar_DB = require('./config/db.js');
  const cors = require('cors');
    
    
  const app = express();
  conectar_DB();
  app.use(cors());
    
  app.use(express.json());

  app.use('/api', require('./routes/movies'));
  app.use('/api', require('./routes/series'));

  app.listen(3000, () => {
    console.log("El servidor se esta ejecutando en el puerto 3000");
  })

} catch (error) {
  console.log(error);
}