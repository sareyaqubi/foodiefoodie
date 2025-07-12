const db = require('../db');

exports.getAll = () => db.query('SELECT * FROM restaurants');
exports.getById = (id) => db.query('SELECT * FROM restaurants WHERE id = $1', [id]);
exports.create = (name, location) => db.query('INSERT INTO restaurants (name, location) VALUES ($1, $2) RETURNING *', [name, location]);
exports.update = (id, name, location) => db.query('UPDATE restaurants SET name = $1, location = $2 WHERE id = $3 RETURNING *', [name, location, id]);
exports.remove = (id) => db.query('DELETE FROM restaurants WHERE id = $1', [id]);
