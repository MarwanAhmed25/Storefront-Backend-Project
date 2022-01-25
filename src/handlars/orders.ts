import { Application, Response, Request } from 'express';
import { Order, order } from '../models/orders';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret:string = (process.env.token as unknown)as string;

const order_obj = new Order();

async function index(req: Request, res: Response) {

  try{
    const token = (req.headers.token as unknown)as string;
    const permession = jwt.verify(token, secret);
    if(permession){
      try{
        const resault = await order_obj.index(parseInt(req.params.user_id));
        res.json(resault);
      }catch(e)
      {
        res.status(400).json(`${e}`);
      }
    }
    else
      res.send('Not allowed login first!!');
  }catch(e){
    res.status(400).send(`${e}`);
  }
}

async function show(req: Request, res: Response) {

  try{
    const token = (req.headers.token as unknown)as string;
    const permession = jwt.verify(token, secret);
    if(permession){
      try{
        const resault = await order_obj.show(parseInt(req.params.order_id), parseInt(req.params.user_id));
        res.json(resault);
      }catch(e)
      {
        res.status(400).json(`${e}`);
      }
    }
    else
      res.send('Not allowed login first!!');
  }catch(e){
    res.status(400).send(`${e}`);
  }
}

async function update(req: Request, res: Response) {

  const token = (req.headers.token as unknown)as string;
  const permession = jwt.verify(token, secret);
  if(permession){
    try {
      const o: order = {
        id: parseInt(req.params.order_id),
        status: req.body.status,
        user_id:parseInt(req.params.user_id)
      };
      const resault = await order_obj.update(o);
      res.json(resault);
    } catch (e) {
      res.status(400).json(`${e}`);
    }
  }
  else
    res.send('Not allowed login first!!');

}

async function create(req: Request, res: Response) {
  const token = (req.headers.token as unknown)as string;
  const permession = jwt.verify(token, secret);
  if(permession){
    try {
      const o: order = {
        status: req.body.status,
        user_id: parseInt(req.params.user_id),
      };
      const resault = await order_obj.create(o);
      res.json(resault);
    } catch (e) {
      res.status(400).json(`${e}`);
    }
  }
  else
    res.send('Not allowed login first!!');

}

async function delete_(req: Request, res: Response) {

  const token = (req.headers.token as unknown)as string;
  const permession = jwt.verify(token, secret);
  if(permession){
    try {
      const resault = await order_obj.delete(
        parseInt(req.params.order_id), parseInt(req.params.user_id)
      );
      res.json(resault);
    } catch (e) {
      res.status(400).json(`${e}`);
    }
  }
  else
    res.send('Not allowed login first!!');
}

async function addProduct(req: Request, res: Response) {
  try {
    const order_id = parseInt(req.params.order_id);
    const product_id = parseInt(req.body.product_id);
    const quantity = parseInt(req.body.quantity);

    const token = (req.headers.token as unknown)as string;
    const permession = jwt.verify(token, secret);
    if(permession){
      const resault = await order_obj.addProduct(order_id, product_id, quantity);
      res.json(resault);
    }
    else
      res.send('Not allowed login first!!');
  } catch (e) {
    res.status(400).json(`${e}`);
  }
}
function mainRoutes(app: Application) {
  app.get('/users/:user_id/orders', index);
  app.get('/users/:user_id/orders/:order_id', show);
  app.post('/users/:user_id/orders', create);
  app.post('/users/:user_id/orders/:order_id/products', addProduct);
  app.patch('/users/:user_id/orders/:order_id', update);
  app.delete('/users/:user_id/orders/:order_id', delete_);
}

export default mainRoutes;
