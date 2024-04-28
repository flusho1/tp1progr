const mongoose = require('mongoose');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/ATL', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    // Aquí puedes continuar con el resto de tu lógica una vez que la conexión se haya establecido
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });