const express = require("express");
const client = require("../db");
const usersRouter = express.Router();

//Escribí acá la ruta para obtener los tweets de un usuario en particular
usersRouter.get("/:name", (req, res, next) => {
  const baseQuery =
    "SELECT *, tweets.id as tid FROM tweets INNER JOIN users ON users.id=tweets.user_id WHERE users.name=$1";
  client.query(baseQuery, [req.params.name], (err, result) => {
    if (err) return next(err);
    const tweets = result.rows;
    res.send(tweets);
  });
});

module.exports = usersRouter;
