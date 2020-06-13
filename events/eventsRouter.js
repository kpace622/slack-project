const express = require('express');
const Events = require('./eventsModel')

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.challenge) {
        res.status(200);
        res.contentType('text/plain');
        console.log(req.body)
        res.send(req.body.challenge);
    } else {
        console.log('Slack Payload: ' + req.body.event);
        Events.addEvent(req.body.event)
      }
})

module.exports = router;