const db = require('../db');
exports.getAll = () => db.query('SELECT * FROM customers');
exports.create = (name, phone) => db.query('INSERT INTO customers (name, phone) VALUES ($1, $2) RETURNING *', [name, phone]);
exports.update = (id, name, phone) => db.query('UPDATE customers SET name=$1, phone=$2 WHERE id=$3 RETURNING *', [name, phone, id]);
exports.remove = (id) => db.query('DELETE FROM customers WHERE id = $1', [id]);

