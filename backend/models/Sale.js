const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');

const Sale = sequelize.define('Sale', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true },
    productId: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: { model: Product, key: 'id' } },
    quantity: { 
        type: DataTypes.INTEGER, 
        allowNull: false },
    total: { 
        type: DataTypes.FLOAT, 
        allowNull: false },
    sellerId: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: { model: User, key: 'id' } }
});
module.exports = Sale;