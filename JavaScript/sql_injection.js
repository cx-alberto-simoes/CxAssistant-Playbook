const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testdb'
});

app.get('/user', (req, res) => {
    const username = req.query.username;
    
    // SQL Injection vulnerability - user input directly concatenated
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).send('Database error');
            return;
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
