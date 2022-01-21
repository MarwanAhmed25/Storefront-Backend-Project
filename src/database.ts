import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { db_host, db_user, db_password, db_name, env, db_name_test} = process.env;

let db:string|undefined;
if(env=='test')
{
  db=db_name_test;
}else{
  db = db_name;
}


const Client = new Pool({
  host:db_host,
  database: db,
  user: db_user,
  password: db_password
});

export default Client;