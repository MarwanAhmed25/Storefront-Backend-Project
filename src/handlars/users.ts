import { Application, Response, Request } from 'express';
import { User, user } from '../models/users';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret:string = (process.env.token as unknown)as string;
const user_obj = new User();

async function index(req: Request, res: Response) {

  try{
    const resault = await user_obj.index();
    res.status(200).json(resault);
  }catch(e)
  {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function show(req: Request, res: Response) {

  try{
    const resault = await user_obj.show(parseInt(req.params.id));
    res.status(200).json(resault);
  }catch(e)
  {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }

}

async function update(req: Request, res: Response) {
  try {
    const u: user = {
      id: req.params.id as unknown as number,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password:''
    };
    const resault = await user_obj.update(u);
    res.status(200).json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function create(req: Request, res: Response) {
  try {
    const u: user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
    };
    const resault = await user_obj.create(u);
    const token = jwt.sign({user: resault}, secret);

    res.status(200).json(token);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function delete_(req: Request, res: Response) {
  try {
    const resault = await user_obj.delete(parseInt(req.params.id));
    res.status(200).json(resault);
  } catch (e) {
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

async function login(req: Request, res: Response) {
  try{
    const {username, password, token}= req.body;

    const resault = await user_obj.auth(username, password);
    if(resault != null || jwt.verify(token, secret))
      res.status(200).send('succeed');
    else
      res.status(400).send('faild');
  } catch(e){
    console.log(`${e}`);
    res.status(400).json(`${e}`);
  }
}

function mainRoutes(app: Application) {
  app.post('/login', login);
  app.get('/users', index);
  app.get('/users/:id', show);
  app.post('/users', create);
  app.patch('/users/:id', update);
  app.delete('/users/:id', delete_);
}

export default mainRoutes;
