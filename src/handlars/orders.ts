import { Application, Response, Request } from 'express';
import { Order, order } from '../models/orders';

const order_obj = new Order();

async function index(req: Request, res: Response) {

  try{
    const resault = await order_obj.index(parseInt(req.params.user_id));
    res.json(resault);
  }catch(e)
  {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function show(req: Request, res: Response) {

  try{
    const resault = await order_obj.show(parseInt(req.params.order_id), parseInt(req.params.user_id));
    res.json(resault);
  }catch(e)
  {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function update(req: Request, res: Response) {
  try {
    const o: order = {
      id: parseInt(req.params.order_id),
      status: req.body.status,
      user_id:parseInt(req.params.user_id)
    };
    const resault = await order_obj.update(o);
    res.json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function create(req: Request, res: Response) {
  try {
    const o: order = {
      status: req.body.status,
      user_id: parseInt(req.params.user_id),
    };
    const resault = await order_obj.create(o);
    res.json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function delete_(req: Request, res: Response) {
  try {
    const resault = await order_obj.delete(
      parseInt(req.params.order_id), parseInt(req.params.user_id)
    );
    res.json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function addProduct(req: Request, res: Response) {
  try {
    const order_id = req.params.id as unknown as number;
    const product_id = parseInt(req.body.product_id);
    const quantity = parseInt(req.body.quantity);

    const resault = await order_obj.addProduct(order_id, product_id, quantity);
    res.json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}
function mainRoutes(app: Application) {
  app.get('/users/:user_id/orders', index);
  app.get('/users/:user_id/orders/:order_id', show);
  app.post('/users/:user_id/orders', create);
  app.post('/users/:user_id/orders/:order_id/products', addProduct);
  app.post('/users/:user_id/orders/:order_id', update);
  app.delete('/users/:user_id/orders/:order_id', delete_);
}

export default mainRoutes;
