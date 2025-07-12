const Restaurant = require('../models/restaurantModel');

exports.getAllRestaurants = async (req, res) => {
  const result = await Restaurant.getAll();
  res.json(result.rows);
};

exports.createRestaurant = async (req, res) => {
  const { name, location } = req.body;
  const result = await Restaurant.create(name, location);
  res.status(201).json(result.rows[0]);
};

exports.updateRestaurant = async (req, res) => {
  const { name, location } = req.body;
  const { id } = req.params;
  const result = await Restaurant.update(id, name, location);
  res.json(result.rows[0]);
};

exports.deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  await Restaurant.remove(id);
  res.status(204).send();
};

