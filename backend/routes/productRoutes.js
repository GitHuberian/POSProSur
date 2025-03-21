const express = require('express');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', authenticateToken, getProducts);
router.post('/', authenticateToken, authorizeRole(['vendedor', 'gerente']), createProduct);
router.put('/:id', authenticateToken, authorizeRole(['vendedor', 'gerente']), updateProduct);
router.delete('/:id', authenticateToken, authorizeRole(['vendedor', 'gerente']), deleteProduct);

module.exports = router;
