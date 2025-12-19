const express = require('express');
const mysql = require('mysql');
const app = express();

// Hardcoded credentials vulnerability
const DB_HOST = 'localhost';
const DB_USER = 'admin';
const DB_PASSWORD = 'SuperSecret123!';
const API_KEY = 'sk_live_1234567890abcdefghijklmnop';

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: 'myapp'
});

app.get('/api/data', (req, res) => {
    // Hardcoded API key in code
    const apiKey = 'AIzaSyD1234567890abcdefghijklmnopqrstuv';
    
    connection.query('SELECT * FROM data', (error, results) => {
        if (error) {
            res.status(500).send('Error');
            return;
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
