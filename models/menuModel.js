const db = require('../db');
exports.getAll = (restaurantId) => db.query('SELECT * FROM menu_items WHERE restaurant_id = $1', [restaurantId]);
exports.create = (restaurantId, name, price) => db.query('INSERT INTO menu_items (restaurant_id, name, price) VALUES ($1, $2, $3) RETURNING *', [restaurantId, name, price]);
exports.update = (id, name, price, available) => db.query('UPDATE menu_items SET name=$1, price=$2, available=$3 WHERE id=$4 RETURNING *', [name, price, available, id]);
exports.remove = (id) => db.query('DELETE FROM menu_items WHERE id = $1', [id]);
