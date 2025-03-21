const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const newProduct = await Product.create({ name, price, stock });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto', error });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, stock } = req.body;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

        product.name = name;
        product.price = price;
        product.stock = stock;
        await product.save();

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar producto', error });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

        await product.destroy();
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto', error });
    }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
