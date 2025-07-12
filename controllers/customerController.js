const Customer = require('../models/customerModel');

exports.getAllCustomers = async (req, res) => {
  const result = await Customer.getAll();
  res.json(result.rows);
};

exports.createCustomer = async (req, res) => {
  const { name, phone } = req.body;
  const result = await Customer.create(name, phone);
  res.status(201).json(result.rows[0]);
};

exports.updateCustomer = async (req, res) => {
  const { name, phone } = req.body;
  const result = await Customer.update(req.params.id, name, phone);
  res.json(result.rows[0]);
};

exports.deleteCustomer = async (req, res) => {
  await Customer.remove(req.params.id);
  res.status(204).send();
};
