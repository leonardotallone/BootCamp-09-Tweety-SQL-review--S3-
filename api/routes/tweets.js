const express = require("express");
const client = require("../db");
const tweetsRouter = express.Router();

//Escribí acá la ruta para obtener todos los tweets
tweetsRouter.get("/", (req, res, next) => {
  const baseQuery =
    "SELECT *, tweets.id as tid FROM tweets INNER JOIN users ON users.id=tweets.user_id";
  client.query(baseQuery, (err, result) => {
    if (err) return next(err);
    const tweets = result.rows;
    res.send(tweets);
  });
});

//Escribí acá la ruta para obtener un tweet en particular
tweetsRouter.get("/:id", (req, res, next) => {
  const baseQuery =
    "SELECT *, tweets.id as tid FROM tweets INNER JOIN users ON users.id=tweets.user_id WHERE tweets.id=$1";
  client.query(baseQuery, [req.params.id], (err, result) => {
    if (err) return next(err);
    const tweet = result.rows[0];
    res.send(tweet);
  });
});

//Escribí acá la ruta para eliminar un tweet
tweetsRouter.delete("/:id", (req, res, next) => {
  let tweet = undefined;
  const baseQueryTweet =
    "SELECT *, tweets.id as tid FROM tweets WHERE tweets.id=$1";
  client.query(baseQueryTweet, [req.params.id], (err, result) => {
    if (err) return next(err); // pasa el error a Express
    tweet = result.rows[0];
    const baseQueryDeleteTweet = "DELETE FROM tweets WHERE tweets.id=$1";
    client.query(baseQueryDeleteTweet, [req.params.id], (err) => {
      if (err) return next(err); // pasa el error a Express
      res.status(202).send(tweet);
    });
  });
});

//Escribí acá la ruta para crear un tweet
tweetsRouter.post("/", (req, res, next) => {
  let user_id = undefined;
  const queryBaseUser = "INSERT INTO users (name) VALUES ($1) RETURNING id";
  client.query(queryBaseUser, [req.body.name], (err, result) => {
    if (err) return next(err); // pasa el error a Express
    user_id = result.rows[0].id;
    const queryBaseTweet =
      "INSERT INTO tweets (user_id, content, imgurl) VALUES ($1, $2, $3) RETURNING id";
    client.query(
      queryBaseTweet,
      [user_id, req.body.content, req.body.imgurl],
      (err, result) => {
        if (err) return next(err); // pasa el error a Express
        const baseQuery =
          "SELECT *, tweets.id as tid FROM tweets INNER JOIN users ON users.id=tweets.user_id WHERE tweets.id=$1";
        client.query(baseQuery, [result.rows[0].id], (err, result) => {
          if (err) return next(err);
          const tweet = result.rows[0];
          res.status(201).send(tweet);
        });
      }
    );
  });
});

module.exports = tweetsRouter;
