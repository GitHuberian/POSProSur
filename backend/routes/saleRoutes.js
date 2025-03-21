const express = require('express');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const { getSales, cancelSale, deleteSale } = require('../controllers/saleController');

const router = express.Router();

router.get('/', authenticateToken, getSales);
router.put('/cancel/:id', authenticateToken, authorizeRole(['vendedor', 'gerente']), cancelSale);
router.delete('/:id', authenticateToken, authorizeRole(['vendedor', 'gerente']), deleteSale);

module.exports = router;
