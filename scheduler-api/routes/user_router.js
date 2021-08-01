const express = require('express');

/*
    Defines routes for each function of user controller
*/

const UserCtrl = require('../controllers/user_ctrl');

const router = express.Router();

/**
 * @apiDescription Description of the 3  HTTP methods designed for the users data.
 * @apiGroup User
 * "post('/user')";
 * "post('/auth');
 * "get('/:username')";
 * "delete('/:username')";
 */
router.post('/user', UserCtrl.createUser);
router.post('/auth', UserCtrl.authUser);
router.get('/:username', UserCtrl.getUserByName);
router.delete('/:username', UserCtrl.deleteUser);

module.exports = router;