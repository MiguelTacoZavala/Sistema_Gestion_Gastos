const router = require('express').Router();
const Gasto = require('../models/Gasto');

// Ruta para obtener los gastos de un usuario
router.get('/gastos/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const gastos = await Gasto.findAll({
            where: { usuario_id: userId }
        });
        res.json(gastos);
    } catch (error) {
        console.error('Error al obtener los gastos:', error);
        res.status(500).json({ message: 'Error al obtener los gastos' });
    }
});

module.exports = router;