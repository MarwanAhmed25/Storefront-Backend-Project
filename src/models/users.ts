import Client from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const {extra, round} = process.env;

export type user = {
  id?: number;
  first_name: string;
  last_name: string;
  password: string;
};

export class User {
  async index(): Promise<user[]> {
    try {
      const conn = await Client.connect();
      const sql = 'select * from users;';
      const res = await conn.query(sql);
      conn.release();
      return res.rows;
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async show(id: number): Promise<user> {
    try {
      const conn = await Client.connect();
      const sql = 'select id,first_name,last_name from users where id =($1);';
      const res = await conn.query(sql, [id]);
      conn.release();
      return res.rows[0];
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async create(u: user): Promise<string> {

    const hash = bcrypt.hashSync(u.password+extra, parseInt(round as string));
    try {
      const conn = await Client.connect();
      const sql =
        'insert into users (first_name, last_name, password) values($1,$2,$3);';
      const res = await conn.query(sql, [
        u.first_name,
        u.last_name,
        hash
      ]);
      conn.release();
      return 'created';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async update(u: user): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql =
        'update users set first_name=($1), last_name=($2) where id=($3) ; ';
      const res = await conn.query(sql, [u.first_name, u.last_name, u.id]);
      conn.release();
      return 'updated';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async delete(id: number): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql = 'delete from users where id =($1) ;';
      const res = await conn.query(sql, [id]);
      conn.release();
      return 'deleted';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async auth(username:string, pass:string):Promise<string>{

    try {
      const conn = await Client.connect();
      const sql = 'select * from users where first_name=($1);';
      const res = await conn.query(sql,[username]);
      if(res.rows.length){
        const isExist = bcrypt.compareSync(pass+extra, res.rows[0].password);
        if(isExist)
          return 'succeed';
      }
      return 'fsild';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

}
