const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/ping', (req, res) => {
    const host = req.query.host;
    
    // Command injection vulnerability - user input in shell command
    exec(`ping -c 4 ${host}`, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            res.status(500).send(`stderr: ${stderr}`);
            return;
        }
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
