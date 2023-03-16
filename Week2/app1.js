// Import the express module
var express = require('express');

// Create an instance of express
var app = express();

// Create a route for the app
app.get('/', function(req, res) {
    res.send('Hello World');
});

// Start the server and listen on port 3000
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
