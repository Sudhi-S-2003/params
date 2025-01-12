const express = require('express');
const app = express();
const port = 3002;

// Middleware to parse JSON data
app.use(express.json());


// POST route
app.post('/post', (req, res) => {
    res.json({ message: req.body.message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
