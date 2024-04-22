import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {router} from "./routes/products.routes";
import { db} from './db.config';
const REDIS_URL = process.env.REDIS_URL || 'localhost'
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379')
const REDIS_EXPIRE = parseInt(process.env.REDIS_EXPIRE || `10`);
dotenv.config();

let cache = require('express-redis-cache')({
    host: REDIS_URL, port: REDIS_PORT, expire: REDIS_EXPIRE
});


const app: Express = express();
const port = process.env.PORT ;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Products-api ");
});

app.use('/products',  cache.route(),  router);

db.then(() => {
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
})