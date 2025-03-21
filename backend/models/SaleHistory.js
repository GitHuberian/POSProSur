const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Sale = require('./Sale');

const SaleHistory = sequelize.define('SaleHistory', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true },
    saleId: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: { model: Sale, key: 'id' } },
    action: { 
        type: DataTypes.STRING, 
        allowNull: false }, // 'Cancelada' o 'Eliminada'
    userId: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: { model: User, key: 'id' } },
    createdAt: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW }
});

module.exports = SaleHistory;
