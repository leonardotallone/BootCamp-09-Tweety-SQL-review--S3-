const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require('./routes');

app.use(morgan("dev"));

app.use(express.json());

app.use('/api', routes);

// El Middleware para manejo de errores posee un parámetro extra, en este caso lo llamamos err
// Este último Middleware detecta los errores y los coloca en dicho parámetro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Some custom error!!');
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
