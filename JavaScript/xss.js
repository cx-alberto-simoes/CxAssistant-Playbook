const express = require('express');
const app = express();

app.get('/welcome', (req, res) => {
    const name = req.query.name;
    
    // XSS vulnerability - user input directly rendered without sanitization
    res.send(`<html><body><h1>Welcome ${name}</h1></body></html>`);
});

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    
    // XSS vulnerability - reflected XSS
    res.send(`
        <html>
        <body>
            <h1>Search Results</h1>
            <p>You searched for: ${searchTerm}</p>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
