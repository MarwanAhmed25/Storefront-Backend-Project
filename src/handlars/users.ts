import { Application, Response, Request } from 'express';
import { User, user } from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret:string = (process.env.token as unknown)as string;
const user_obj = new User();

async function index(req: Request, res: Response) {

  try{
    const token = req.body.token;
    const permession = jwt.verify(token, secret);
    if(permession){
      try{
        const resault = await user_obj.index();
        res.status(200).json(resault);
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
    const token = req.body.token;
    const permession = jwt.verify(token, secret);
    if(permession){
      try{
        const resault = await user_obj.show(parseInt(req.params.id));
        res.status(200).json(resault);
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
  try{
    const token = req.body.token;
    const permession = jwt.verify(token, secret);
    if(permession){
      try {
        const u: user = {
          id: req.params.id as unknown as number,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          password:''
        };
        const resault = await user_obj.update(u);
        const newToken = jwt.sign({user: resault}, secret);
        res.status(200).json(newToken);
      } catch (e) {
        res.status(400).json(`${e}`);
      }
    }
    else
      res.send('Not allowed login first!!');
  }catch(e){
    res.status(400).send(`${e}`);
  }

}

async function create(req: Request, res: Response) {
  try {
    const hash = bcrypt.hashSync(req.body.password+process.env.extra, parseInt(process.env.round as string));

    const u: user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: hash,
    };
    const resault = await user_obj.create(u);
    const token = jwt.sign({user: resault}, secret);

    res.status(200).json(token);
  } catch (e) {
    res.status(400).json(`${e}`);
  }
}

async function delete_(req: Request, res: Response) {
  const token = req.body.token;
  const permession = jwt.verify(token, secret);
  if(permession){
    try {
      const resault = await user_obj.delete(parseInt(req.params.id));
      res.status(200).json(resault);
    } catch (e) {
      res.status(400).json(`${e}`);
    }
  }
  else
    res.send('Not allowed login first!!');

}

async function login(req: Request, res: Response) {
  try{
    const {username, password}= req.body;

    const resault = await user_obj.auth(username, password);
    if(resault != null)
      res.status(200).send('succeed');
    else
      res.status(400).send('faild');
  } catch(e){
    res.status(400).json(`${e}`);
  }
}

async function get_token(req: Request, res: Response) {

  try{
    const resault = await user_obj.show(parseInt(req.params.id));

    const token = jwt.sign({user:resault}, secret);
    res.status(200).json(token);
  }catch(e)
  {
    res.status(400).json(`${e}`);
  }

}

function mainRoutes(app: Application) {
  app.post('/login', login);
  app.get('/users', index);
  app.get('/users/:id', show);
  app.post('/users', create);
  app.get('/users/:id/get_token', get_token);
  app.patch('/users/:id', update);
  app.delete('/users/:id', delete_);
}

export default mainRoutes;
