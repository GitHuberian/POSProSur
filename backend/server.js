const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');
const swaggerRoutes = require('./config/swaggerConfig');

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(swaggerRoutes);

// Rutas
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/reports', reportRoutes);

// Sincronización de la base de datos y arranque del servidor
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
    server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT} y docs en /api-docs`));
}).catch(err => console.log('Error al conectar con la base de datos:', err));
