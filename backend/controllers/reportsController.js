const Sale = require('../models/Sale');
const Product = require('../models/Product');
const { Op } = require('sequelize');

const getSalesByDate = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const sales = await Sale.findAll({
      where: { saleDate: { [Op.between]: [startDate, endDate] } },
      include: [{ model: Product, attributes: ['name'] }]
    });
    res.json(sales);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
};

const getTopProducts = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const topProducts = await Sale.findAll({
      attributes: ['productId', [sequelize.fn('SUM', sequelize.col('quantity')), 'totalSold']],
      where: { saleDate: { [Op.between]: [startDate, endDate] } },
      group: ['productId'],
      order: [[sequelize.literal('totalSold'), 'DESC']],
      limit: 3,
      include: [{ model: Product, attributes: ['name'] }]
    });
    res.json(topProducts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos más vendidos' });
  }
};

const getSalesGraph = async (req, res) => {
  try {
    const { productId, startDate, endDate } = req.query;
    const salesData = await Sale.findAll({
      where: { productId, saleDate: { [Op.between]: [startDate, endDate] } },
      attributes: ['saleDate', 'quantity'],
      order: [['saleDate', 'ASC']]
    });
    res.json(salesData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de la gráfica' });
  }
};

module.exports = { getSalesByDate, getTopProducts, getSalesGraph };