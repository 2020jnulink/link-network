

//react와 node.js 연동하기

const express = require('express');
const app = express();
const shop_router = require('./routers/shop.router');
//const insurance_router = require('./routers/insurance.router');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/api', shop_router );


app.listen(3001, () => console.log('Node.js Server is running on port 3001'));
