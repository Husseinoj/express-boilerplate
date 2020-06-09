import "@babel/polyfill"
import express from 'express';
import bodyParser from 'body-parser';

import router from '../config/router';

const app = express();
const port = 30000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router);

app.listen(port, ()=> console.log(`server running on http://localhost:${port}`));