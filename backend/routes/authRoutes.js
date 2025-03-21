const express = require('express');
const { authenticateUser } = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión con un usuario registrado
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "usuario123"
 *               password:
 *                 type: string
 *                 example: "secreto123"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso, devuelve un token
 *       400:
 *         description: Credenciales incorrectas
 */
router.post('/login', authenticateUser);

module.exports = router;
