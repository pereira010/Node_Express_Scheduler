const express = require('express');

/*
    Defines routes for each function of task controller
*/

const TaskCtrl = require('../controllers/task_ctrl');

const router = express.Router();

/**
 * @apiDescription Description of the 3  HTTP methods designed for the tasks data.
 * @apiGroup Task
 * "post('/user')";
 * "delete('/:id');
 * "get('/:username')";
 */
router.post('/task', TaskCtrl.createTask);
router.delete('/:id', TaskCtrl.deleteTask);
router.get('/:username', TaskCtrl.getTasks);

module.exports = router;