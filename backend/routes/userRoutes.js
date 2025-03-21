const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();


/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra un nuevo usuario
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
 *               role:
 *                 type: string
 *                 example: "vendedor"
 *     responses:
 *       201:
 *         description: Usuario registrado 
 *       400:
 *         description: Error al registrar usuario
 */
router.post('/register', registerUser);

module.exports = router;