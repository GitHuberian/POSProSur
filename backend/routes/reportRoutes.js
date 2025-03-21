const express = require('express');
const { verifyToken, isGerente } = require('../middleware/authMiddleware');
const { getSalesByDate, getTopProducts, getSalesGraph } = require('../controllers/dashboardController');

const router = express.Router();

/**
 * @swagger
 * /dashboard/sales:
 *   get:
 *     summary: Obtiene productos vendidos en un periodo de fechas
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de inicio del periodo
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de fin del periodo
 *     responses:
 *       200:
 *         description: Lista de productos vendidos en el periodo indicado
 *       403:
 *         description: Acceso denegado
 */
router.get('/sales', verifyToken, isGerente, getSalesByDate);

/**
 * @swagger
 * /dashboard/top-products:
 *   get:
 *     summary: Obtiene los 3 productos más vendidos en un periodo de fechas
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de inicio del periodo
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de fin del periodo
 *     responses:
 *       200:
 *         description: Lista con los 3 productos más vendidos
 *       403:
 *         description: Acceso denegado
 */
router.get('/top-products', verifyToken, isGerente, getTopProducts);

/**
 * @swagger
 * /dashboard/sales-graph:
 *   get:
 *     summary: Obtiene la gráfica de ventas por productos en un periodo
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto a consultar
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de inicio del periodo
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de fin del periodo
 *     responses:
 *       200:
 *         description: Datos para la gráfica de ventas
 *       403:
 *         description: Acceso denegado
 */
router.get('/sales-graph', verifyToken, isGerente, getSalesGraph);

module.exports = router;
