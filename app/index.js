import "@babel/polyfill";
import 'module-alias/register';

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
 

import router from '@root/config/router';

const app = express();
const port = process.env.SERVER_PORT;

dotenv.config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router);

app.listen(port, ()=> console.log(`server running on http://localhost:${port}`));