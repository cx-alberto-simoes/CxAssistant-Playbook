const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/download', (req, res) => {
    const filename = req.query.file;
    
    // Path traversal vulnerability - user input used directly in file path
    const filePath = path.join(__dirname, 'files', filename);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('File not found');
            return;
        }
        res.send(data);
    });
});

app.get('/read', (req, res) => {
    const file = req.query.filename;
    
    // Path traversal vulnerability - no validation
    fs.readFile('/var/www/uploads/' + file, (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
