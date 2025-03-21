const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Sincronización de la base de datos y arranque del servidor
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
    server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
}).catch(err => console.log('Error al conectar con la base de datos:', err));
