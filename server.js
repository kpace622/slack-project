const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
      <h2>Slack Project!</h>
    `);
  });

server.post('/api/view', (req, res) => {
    console.log('check')
    if(req.body.challenge) {
        res.status(200);
        res.contentType('text/plain');
        console.log(req.body)
        res.send(req.body.challenge);
    } else {
        console.log('Slack Payload: ' + JSON.stringify(req.body));
    }
})

module.exports = server;