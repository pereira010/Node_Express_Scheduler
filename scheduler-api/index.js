const express = require('express');
const jwt = require('jsonwebtoken'); //
const User = require('./models/user_model'); //
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/db');

// ROUTE LINKS
const userRouter = require('./routes/user_router');
const eventRouter = require('./routes/event_router');
const taskRouter = require('./routes/task_router');

const app = express()
const apiPort = 9000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public')) // 

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// API USE CALLS

/**
 * @apiDescription Path description of the 3 baseURL.
 * '/user'; '/event'; '/task'.
 */
app.use('/user', userRouter);
app.use('/event', eventRouter);   
app.use('/task', taskRouter);

//Authentication JSON WEB TOKEN

app.post('/user', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Authenticated...',
                authData
            });
        }
    });
});


app.post('/auth', (req, res) => {
    
    var user = User;

    jwt.sign({user}, 'secretkey',{ expiresIn: '60s' }, (err, token) => {
        res.json({
            token
        });
    });
});

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the Token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))