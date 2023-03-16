// Import the required packages
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;


// Handle a GET request of a user of a specified ID
app.get('/api/users/:id', async (req, res) => {

    // Use a try-catch block to handle (catch) any unexpected errors
    try {
        // Retrieve the ID from the URL
        const { id } = req.params;
        console.log(`Retrieving user ID: {id}`);

        // Send a GET request to retrieve the user
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        // When the response is received, display it.
        console.log(response.data);
        res.send(response.data);
    }
    catch (error) {
        // Handle (catch) any unexpected errors.
        console.error(error);
        res.status(500).send('Error received');
    }
});


app.get('/', (req, res) => {
    res.send("Welcome!");
});


app.listen(PORT, () => {
    console.log(`Microservice listening at http://localhost:${PORT}`);
    console.log()
});