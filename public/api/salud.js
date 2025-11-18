const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toLocaleString(),
        servidor: 'Node.js + Express en Vercel',
        version: '1.0.0',
        entorno: 'production'
    });
});

module.exports = app;