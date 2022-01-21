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
      const sql = 'select * from users where id =($1);';
      const res = await conn.query(sql, [id]);
      conn.release();
      return res.rows[0];
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async create(u: user): Promise<user> {

    const hash = bcrypt.hashSync(u.password+extra, parseInt(round as string));
    try {
      const conn = await Client.connect();
      const sql =
        'insert into users (first_name, last_name, password) values($1,$2,$3)RETURNING *;';
      const res = await conn.query(sql, [
        u.first_name,
        u.last_name,
        hash
      ]);
      conn.release();
      return res.rows[0];
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async update(u: user): Promise<user> {
    try {
      const conn = await Client.connect();
      const sql =
        'update users set first_name=($1), last_name=($2) where id=($3) RETURNING *; ';
      const res = await conn.query(sql, [u.first_name, u.last_name, u.id]);
      conn.release();
      return res.rows[0];
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async delete(id: number): Promise<user> {
    try {
      const conn = await Client.connect();
      const sql = 'delete from users where id =($1) RETURNING*;';
      const res = await conn.query(sql, [id]);
      conn.release();
      return res.rows[0];
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async auth(username:string, pass:string):Promise<user|null>{

    try {
      const conn = await Client.connect();
      const sql = 'select * from users where first_name=($1);';
      const res = await conn.query(sql,[username]);
      if(res.rows.length){
        const isExist = bcrypt.compareSync(pass+extra, res.rows[0].password);
        if(isExist)
          return res.rows[0];
      }
      return null;
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

}
