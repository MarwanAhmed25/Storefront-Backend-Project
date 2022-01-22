import Client from '../database';

export type order = {
  id?: number;
  status: string;
  user_id?: number;
};

enum STATUS{'open', 'closed'}

export class Order {
  async index(id:number): Promise<order[]> {
    try {
      const conn = await Client.connect();
      const sql = 'select * from orders where user_id=($1);';
      const res = await conn.query(sql,[id]);
      conn.release();
      return res.rows;
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async show(id: number, user_id:number): Promise<order|string> {
    try {

      const conn = await Client.connect();
      const q = 'select user_id from orders where id=($1)';
      const id_of_user = await conn.query(q, [id]);
      const user = id_of_user.rows[0];
      if(user == user_id)
      {
        const sql = 'select * from orders where id =($1);';
        const res = await conn.query(sql, [id]);
        conn.release();
        return res.rows[0];
      }
      return 'not allowed';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async create(o: order): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql =
        'insert into orders (status, user_id) values($1,$2)RETURNING *;';
      const res = await conn.query(sql, [o.status, o.user_id]);
      conn.release();
      return 'created';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async update(o: order): Promise<string> {
    try {

      const conn = await Client.connect();
      const q = 'select user_id from orders where id=($1)';
      const id_of_user = await conn.query(q, [o.id]);
      const user = id_of_user.rows[0];
      if(user.user_id == o.user_id)
      {
        const sql = 'update orders set status=($1) where id=($2) RETURNING *; ';
        const res = await conn.query(sql, [o.status, o.id]);
        conn.release();
        return 'updated';
      }
      return 'not allowed';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async delete(id: number, user_id:number): Promise<string> {
    try {
      let resualt:order;

      const conn = await Client.connect();
      const q = 'select user_id from orders where id=($1)';
      const id_of_user = await conn.query(q, [id]);
      const user = id_of_user.rows[0];

      if(user.user_id == user_id)
      {
        const sql = 'delete from orders where id =($1) RETURNING*;';
        const res = await conn.query(sql, [id]);
        resualt = res.rows[0];
        conn.release();
        return 'deleted';
      }

      return 'not allowed';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  async addProduct(
    order_id: number,
    product_id: number,
    quantity: number
  ): Promise<string> {
    try {

      const conn = await Client.connect();
      const sql =
        'insert into order_products (quantity, order_id, product_id) values($1,$2,$3)RETURNING *;';
      const res = await conn.query(sql, [quantity, order_id, product_id]);
      conn.release();
      return 'added';
    } catch (e) {
      throw new Error(`${e}`);
    }
  }
}
