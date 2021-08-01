const Event = require('../models/event_model');

/*
    Controller to define all event functions
*/


//Creates event from json
createEvent = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a proper event info',
        });
    }

    const event = new Event(body);

    if (!event) {
        return res.status(400).json({ success: false, error: err });
    }

    event
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: event._id,
                message: 'Event created!',
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Event not created!',
            });
        });
}


//Deletes event if they exist
deleteEvent = async (req, res) => {
    await Event.findOneAndDelete({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: 'An error occured. Please try again later' });
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` });
        }

        return res.status(200).json({ success: true, data: event });
    }).catch(err => console.log('An error occured. Please try again later'));
}


//Gets all tasks of user
getEvents = async (req, res) => {
    await Event.find({user: req.params.username}, (err, events) => {
        if (err) {
            return res.status(400).json({ success: false, error: 'An error occurred. Please try again later' });
        }
        if (!events.length) {
            return res
                .status(404)
                .json({success: false, error: 'Event not found'});
        }
        return res.status(200).json({success: true, data:events});
    }).catch(err => console.log('An error occurred. Please try again later'));
}

module.exports = {
    createEvent,
    deleteEvent,
    getEvents
}