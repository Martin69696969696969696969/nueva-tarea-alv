const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Middleware para CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Ruta de API de ejemplo
app.get('/api/mensaje', (req, res) => {
    res.json({ 
        mensaje: '¡Servidor funcionando en Vercel! 🚀',
        fecha: new Date().toISOString(),
        autor: 'Martin',
        entorno: 'Vercel Serverless'
    });
});

// Ruta de salud
app.get('/api/salud', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toLocaleString(),
        servidor: 'Node.js + Express en Vercel'
    });
});

// Ruta principal - servir el HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Manejar todas las rutas para SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Exportar para Vercel
module.exports = app;