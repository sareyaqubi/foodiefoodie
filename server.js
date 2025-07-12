const express = require('express');
const dotenv = require('dotenv');
const app = express();
const restaurantRoutes = require('./routes/restaurants');
const menuRoutes = require('./routes/menus');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');

dotenv.config();

app.use(express.json());

app.use('/restaurants', restaurantRoutes);
app.use('/menu', menuRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
