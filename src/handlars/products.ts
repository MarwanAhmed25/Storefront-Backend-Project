import { Application, Response, Request } from 'express';
import { Product, product } from '../models/products';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret:string = (process.env.token as unknown)as string;

const product_obj = new Product();

async function index(req: Request, res: Response) {

  try{
    const resault = await product_obj.index();
    res.status(200).json(resault);
  }catch(e)
  {
    res.status(400).json(`${e}`);
  }
}

async function show(req: Request, res: Response) {

  try{
    const resault = await product_obj.show(
      req.params.id as unknown as number
    );
    res.status(200).json(resault);
  }catch(e)
  {
    res.status(400).json(`${e}`);
  }
}

async function update(req: Request, res: Response) {
  const token = req.body.token;
  const permession = jwt.verify(token, secret);
  if(permession){
    try {
      const p: product = {
        id: req.params.id as unknown as number,
        name: req.body.name,
        price: req.body.price as unknown as number,
        category: req.body.catogery,
      };
      const resault = await product_obj.update(p);
      res.status(200).json(resault);
    } catch (e) {
      res.status(400).json(`${e}`);
    }
  }
  else
    res.send('Not allowed login first!!');

}

async function create(req: Request, res: Response) {
  const token = req.body.token;
  const permession = jwt.verify(token, secret);
  if(permession){
    try {
      const p: product = {
        name: req.body.name,
        price: req.body.price as unknown as number,
        category: req.body.catogery,
      };
      const resault = await product_obj.create(p);
      res.status(200).json(resault);
    } catch (e) {
      res.status(400).json(`${e}`);
    }
  }
  else
    res.send('Not allowed login first!!');

}

async function delete_(req: Request, res: Response) {
  const token = req.body.token;
  const permession = jwt.verify(token, secret);
  if(permession){
    try {
      const resault = await product_obj.delete(
        req.params.id as unknown as number
      );
      res.status(200).json(resault);
    } catch (e) {
      res.status(400).json(`${e}`);
    }
  }
  else
    res.send('Not allowed login first!!');

}

function mainRoutes(app: Application) {
  app.get('/products', index);
  app.get('/products/:id', show);
  app.post('/products', create);
  app.patch('/products/:id', update);
  app.delete('/products/:id', delete_);
}

export default mainRoutes;
