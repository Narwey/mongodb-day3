const express = require('express');
const app = express();
require('./db');
const router = require('./routes/product-route');
app.use(express.json());
app.use(router);


app.listen(3000);