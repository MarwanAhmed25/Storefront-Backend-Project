import { Application, Response, Request } from 'express';
import { Product, product } from '../models/products';

const product_obj = new Product();

async function index(req: Request, res: Response) {

  try{
    const resault = await product_obj.index();
    res.json(resault);
  }catch(e)
  {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function show(req: Request, res: Response) {

  try{
    const resault = await product_obj.show(
      req.params.id as unknown as number
    );
    res.json(resault);
  }catch(e)
  {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function update(req: Request, res: Response) {
  try {
    const p: product = {
      id: req.params.id as unknown as number,
      name: req.body.name,
      price: req.body.price as unknown as number,
      category: req.body.catogery,
    };
    const resault = await product_obj.update(p);
    res.json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function create(req: Request, res: Response) {
  try {
    const p: product = {
      name: req.body.name,
      price: req.body.price as unknown as number,
      category: req.body.catogery,
    };
    const resault = await product_obj.create(p);
    res.json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function delete_(req: Request, res: Response) {
  try {
    const resault = await product_obj.delete(
      req.params.id as unknown as number
    );
    res.json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

function mainRoutes(app: Application) {
  app.get('/products', index);
  app.get('/products/:id', show);
  app.post('/products', create);
  app.post('/products/:id', update);
  app.delete('/products/:id', delete_);
}

export default mainRoutes;
