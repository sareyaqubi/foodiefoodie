const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  const { customerId, restaurantId, items } = req.body;
  const order = await Order.create(customerId, restaurantId, items);
  res.status(201).json(order);
};

exports.getAllOrders = async (req, res) => {
  const result = await Order.getAll();
  res.json(result.rows);
};

exports.getOrdersByCustomer = async (req, res) => {
  const result = await Order.getByCustomer(req.params.customerId);
  res.json(result.rows);
};

exports.updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const result = await Order.updateStatus(req.params.id, status);
  res.json(result.rows[0]);
};

exports.deleteOrder = async (req, res) => {
  await Order.remove(req.params.id);
  res.status(204).send();
};

