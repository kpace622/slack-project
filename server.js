const express = require('express');

const server = express();
const db = require('./database/db-config');
const bodyParser = require('body-parser')

server.use(express.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

server.get('/', (req, res) => {
    res.send(`
      <h2>Slack Project!</h>
    `);
  });

server.post('/api/view', (req, res) => {
    console.log(req.body)
    if(req.body.challenge) {
        res.status(200);
        res.contentType('text/plain');
        console.log(req.body)
        res.send(req.body.challenge);
    } else {
        console.log('Slack Payload: ' + req.body.event);
        db.insert(req.body.event.text).returning('*').into('event').then(function(data) {
          res.send(data);
        });
      }
})

module.exports = server;