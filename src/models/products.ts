import Client from '../database';

export type product = {
  id?: number;
  name: string;
  price: number;
  category?: string;
};

export class Product {
  async index(): Promise<product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'select * from products;';
      const res = await conn.query(sql);
      conn.release();
      return res.rows;
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async show(id: number): Promise<product> {
    try {
      const conn = await Client.connect();
      const sql = 'select * from products where id =($1);';
      const res = await conn.query(sql, [id]);
      conn.release();
      return res.rows[0];
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async create(p: product): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql =
        'insert into products (name, price, category) values($1,$2,$3)RETURNING *;';
      const res = await conn.query(sql, [p.name, p.price, p.category]);
      conn.release();
      return 'created';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async update(p: product): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql =
        'update products set name=($1), price=($2), category=($3) where id=($4) RETURNING *; ';
      const res = await conn.query(sql, [p.name, p.price, p.category, p.id]);
      conn.release();
      return 'updated';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async delete(id: number): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql = 'delete from products where id =($1);';
      const res = await conn.query(sql, [id]);
      conn.release();
      return 'deleted';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }
}
