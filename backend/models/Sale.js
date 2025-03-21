const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sale = sequelize.define('Sale', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true },
    productId: { 
        type: DataTypes.INTEGER, 
        allowNull: false },
    quantity: { 
        type: DataTypes.INTEGER, 
        allowNull: false },
    total: { 
        type: DataTypes.FLOAT, 
        allowNull: false },
    sellerId: { 
        type: DataTypes.INTEGER, 
        allowNull: false }
});
module.exports = Sale;