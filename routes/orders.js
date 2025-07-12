const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.get('/', controller.getAllOrders);
router.get('/customer/:customerId', controller.getOrdersByCustomer);
router.post('/', controller.createOrder);
router.put('/:id', controller.updateOrderStatus);
router.delete('/:id', controller.deleteOrder);

module.exports = router;

