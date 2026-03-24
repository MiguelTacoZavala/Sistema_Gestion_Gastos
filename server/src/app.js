const express = require('express');
const cors = require('cors');

// rutas de autenticacion
const authRoutes = require('./routes/authRoutes');

// ruta para agregar gasto
const addGastoRoute = require('./routes/addGastoRoute');

// ruta para obtener gastos
const getGastosRoute = require('./routes/getGastosRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', authRoutes);
app.use('/api', addGastoRoute);
app.use('/api', getGastosRoute);

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

module.exports = app;