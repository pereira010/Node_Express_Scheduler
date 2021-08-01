const express = require('express');

/*
    Defines routes for each function of event controller
*/

const EventCtrl = require('../controllers/event_ctrl');

const router = express.Router();

/**
 * @apiDescription Description of the 3  HTTP methods designed for the events data.
 * @apiGroup Event
 * "post('/event')";
 * "delete('/:id')";
 * "get('/:username')";
 */
router.post('/event', EventCtrl.createEvent);
router.delete('/:id', EventCtrl.deleteEvent);
router.get('/:username', EventCtrl.getEvents); 

module.exports = router;