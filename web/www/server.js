

//react와 node.js 연동하기

const express = require('express');
const app = express();
const shop_router = require('./routers/shop.router');
//const insurance_router = require('./routers/insurance.router');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(cors());
app.use('/api', shop_router );

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3001;
dotenv.config({ silent: true });

app.listen(port, () => console.log('Node.js Server is running on port %d', port));
