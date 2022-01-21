import express from 'express';
import userRoute from './handlars/users';
import orderRoute from './handlars/orders';
import productRoute from './handlars/products';
import dotenv from 'dotenv';
import body_parser from 'body-parser';
import cors from 'cors';

//dotenv configrations
dotenv.config();

//declaration port for server
const port = process.env.port;
//initial the app of the server
const app = express();
//usig middel ware cors and body parser
app.use(body_parser.json());
app.use(cors());
//listen to the port to run the server
app.listen(port, ():void=>{
  console.log(`server running on port... ${port}`);
});
//run modules of the project
userRoute(app);
orderRoute(app);
productRoute(app);