const Task = require('../models/task_model');

/*
    Controller to define all task functions
*/


//Creates event from json
createTask = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a proper task info',
        });
    }

    const task = new Task(body);
    if (!task) {
        return res.status(400).json({ success: false, error: 'An error occurred. Please try again later' });
    }

    task
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: task._id,
                message: 'Task created!',
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Task not created!',
            });
        });
}


//Deletes task if they exist
deleteTask = async (req, res) => {
    await Task.findOneAndDelete({ _id: req.params.id }, (err, task) => {
        if (err) {
            return res.status(400).json({ success: false, error: 'An error occurred. Please try again later' });
        }

        if (!task) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` });
        }

        return res.status(200).json({ success: true, data: task });
    }).catch(err => console.log('An error occurred. Please try again later'));
}


//Gets all tasks of user
getTasks = async (req, res) => {
    await Task.find({user: req.params.username}, (err, tasks) => {
        if (err) {
            return res.status(400).json({ success: false, error: 'An error occurred. Please try again later' });
        }
        if (!tasks.length) {
            return res
                .status(404)
                .json({success: false, error: 'Task not found'});
        }
        return res.status(200).json({success: true, data:tasks});
    }).catch(err => console.log('An error occurred. Please try again later'));
}

module.exports = {
    createTask,
    deleteTask,
    getTasks
}