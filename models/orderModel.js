const db = require('../db');
exports.create = async (customerId, restaurantId, items) => {
  const client = await db.connect();
  try {
    await client.query('BEGIN');
    const orderRes = await client.query('INSERT INTO orders (customer_id, restaurant_id) VALUES ($1, $2) RETURNING *', [customerId, restaurantId]);
    const orderId = orderRes.rows[0].id;

    for (const item of items) {
      await client.query('INSERT INTO order_items (order_id, menu_item_id, quantity) VALUES ($1, $2, $3)', [orderId, item.menu_item_id, item.quantity]);
    }

    await client.query('COMMIT');
    return orderRes.rows[0];
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
};

exports.getAll = () => db.query('SELECT * FROM orders');
exports.getByCustomer = (customerId) => db.query('SELECT * FROM orders WHERE customer_id = $1', [customerId]);
exports.updateStatus = (id, status) => db.query('UPDATE orders SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
exports.remove = (id) => db.query('DELETE FROM orders WHERE id = $1', [id]);
