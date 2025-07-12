const Menu = require('../models/menuModel');

exports.getMenuByRestaurant = async (req, res) => {
  const result = await Menu.getAll(req.params.restaurantId);
  res.json(result.rows);
};

exports.createMenuItem = async (req, res) => {
  const { restaurantId } = req.params;
  const { name, price } = req.body;
  const result = await Menu.create(restaurantId, name, price);
  res.status(201).json(result.rows[0]);
};

exports.updateMenuItem = async (req, res) => {
  const { name, price, available } = req.body;
  const result = await Menu.update(req.params.id, name, price, available);
  res.json(result.rows[0]);
};

exports.deleteMenuItem = async (req, res) => {
  await Menu.remove(req.params.id);
  res.status(204).send();
};
