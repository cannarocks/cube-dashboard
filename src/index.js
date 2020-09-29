const express = require('express');
const bodyParser = require('body-parser');
const CubejsServerCore = require('@cubejs-backend/server-core');
const basicAuth = require('express-basic-auth')
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(require('cors')());
app.use(bodyParser.json({ limit: '50mb' }));

var admin =  process.env.ADMIN_USER;
var psw =  process.env.ADMIN_PSW;

var user = {}
user[admin] = psw;

const auth = basicAuth({
    users: user,
    challenge: true,
    realm: 'Imb4T3st4pp',
})

const protected_routes = ['/','/#/build', '/#/schema']

protected_routes.forEach((route) => {
	app.get(route, auth, (req, res, next) => { next() });
});




const serverCore = CubejsServerCore.create();
serverCore.initApp(app);

const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if (err) {
    console.error('Fatal error during server start: ');
    console.error(e.stack || e);
  }
  console.log(`🚀 Cube.js server is listening on ${port}`);
});
