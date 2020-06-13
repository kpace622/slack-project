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
        Events.addEvent(req.body.event)
      }
})

router.get('/event', (req, res) => {
    Events.getEvent()
    .then(event => {
        res.json(event)
    })
})

module.exports = router;