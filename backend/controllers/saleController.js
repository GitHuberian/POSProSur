const Sale = require('../models/Sale');
const SaleHistory = require('../models/SaleHistory');

const getSales = async (req, res) => {
    try {
        const sales = await Sale.findAll();
        res.json(sales);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener ventas', error });
    }
};

const cancelSale = async (req, res) => {
    try {
        const { id } = req.params;
        const sale = await Sale.findByPk(id);
        if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });

        sale.status = 'Cancelada';
        await sale.save();

        await SaleHistory.create({ saleId: sale.id, action: 'Cancelada', userId: req.user.id });

        res.json({ message: 'Venta cancelada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al cancelar venta', error });
    }
};

const deleteSale = async (req, res) => {
    try {
        const { id } = req.params;
        const sale = await Sale.findByPk(id);
        if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });

        await SaleHistory.create({ saleId: sale.id, action: 'Eliminada', userId: req.user.id });
        await sale.destroy();

        res.json({ message: 'Venta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar venta', error });
    }
};

module.exports = { getSales, cancelSale, deleteSale };
