const express = require('express');
const http = require('http');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

// Redirection flags for each activity
let redirectUrl = ''; // This will store the URL to redirect to.

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Middleware to check for "Go back" priority
app.use((req, res, next) => {
    if (redirectUrl === 'http://localhost:5000') {
        res.json({ redirect: true, url: redirectUrl });//informs client that redirection should occur
        redirectUrl = ''; // Reset after handling
    } else {
        next(); // Continue to other routes
    }
});

// Endpoint for HIIT
app.get('/hiit', (req, res) => {
    console.log('HIIT endpoint has been selected');
    redirectUrl = '/next.html';  // Set the redirect URL
    res.send('Redirection to HIIT will be triggered');
});

// Endpoint for YOGA
app.get('/yoga', (req, res) => {
    console.log('YOGA endpoint hit');
    redirectUrl = '/yoga.html';  // Set the redirect URL
    res.send('Redirection to YOGA will be triggered');
});

// Endpoint for MEDITATION
app.get('/meditation', (req, res) => {
    console.log('MEDITATION endpoint hit');
    redirectUrl = '/indefinite_med.html';  // Set the redirect URL
    res.send('Redirection to MEDITATION will be triggered');
});

// Endpoint for "Go back"
app.get('/Goback', (req, res) => {
    console.log('Go back endpoint hit');
    redirectUrl = 'http://localhost:5000'; // This now takes priority
    res.json({ redirect: true, url: redirectUrl });
});

// Endpoint to check if redirection is needed
app.get('/check-redirect', (req, res) => {
    if (redirectUrl) {
        res.json({ redirect: true, url: redirectUrl });
        redirectUrl = '';  // Reset the redirect URL after sending it once
    } else {
        res.json({ redirect: false });
    }
});

server.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
