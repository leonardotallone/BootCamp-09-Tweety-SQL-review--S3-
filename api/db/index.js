const pg = require("pg");

const postgresUrl = 'postgres://postgres@localhost/tweetydb';
const client = new pg.Client(postgresUrl);
client.connect();

module.exports = client;