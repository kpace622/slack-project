const express = require('express');

const server = express();
const db = require('./database/db-config');
const bodyParser = require('body-parser')

const eventsRouter = require('./events/eventsRouter');

server.use(express.json());
server.use('/api/view', eventsRouter);
server.use(bodyParser.urlencoded({
  extended: true
}));

server.get('/', (req, res) => {
    res.send(`
      <h2>Slack Project!</h>
    `);
  });



module.exports = server;