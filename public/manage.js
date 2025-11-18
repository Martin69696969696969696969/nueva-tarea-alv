const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ 
        mensaje: '¡API funcionando correctamente en Vercel! 🚀',
        fecha: new Date().toISOString(),
        autor: 'Martin',
        entorno: 'Vercel Serverless Functions',
        status: 'success'
    });
});

module.exports = app;