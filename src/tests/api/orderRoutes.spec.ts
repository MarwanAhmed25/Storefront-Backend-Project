import supertest from "supertest";
import route from '../../index';
import { User, user } from "../../models/users";
import { Order, order } from "../../models/orders";
import { Product, product } from "../../models/products";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret:string = (process.env.token as unknown)as string;
const api = supertest(route);
const user_ = new User();
const order_ = new Order();
const product_ = new Product();

let token:user;
let permession:string;
describe('orders handlars api test',()=>{

    it('orders index route',async ()=>{
        const u:user ={
            id:1,
            first_name:'maro',
            last_name:'nnn',
            password:'123'
        }
        token = await user_.create(u);
        permession = jwt.sign({user:token}, secret);
        const res = await api.get('/users/1/orders').set({'token':permession});
        expect(res.status).toBe(200);
    })

    it('orders show route',async ()=>{
        const o:order ={
            id:1,
            status:'complete',
            user_id:1
        }
        const res1 = await order_.create(o);
        const res = await api.get('/users/1/orders/1').set({'token':permession});
        
        expect(res.status).toBe(200);
    })
    //status
    it('orders create route',async ()=>{
       
        const d={
            'status':'open',
            'token':permession
        }
        const res = await api.post('/users/1/orders').send(d);
        expect(res.status).toBe(200);
    })
    //status
    it('orders update route',async ()=>{
        const d={
            'status':'compete',
            'token':permession
        }
        const res = await api.patch('/users/1/orders/1').send(d);
        expect(res.status).toBe(200);
    })

    //product_id, quantity
    it('orders add product route test',async ()=>{
        const p:product ={
            id:1,
            name:'mobile',
            price:55,
            category:'none'
        }

        const res1 = await product_.create(p);
        
        const d={
            'product_id':1,
            'quantity':5,
            'token':permession
        }
        const res = await api.post('/users/1/orders/1/products').send(d);
        expect(res.status).toBe(200);
    })

    it('oreders delete route',async ()=>{
        const res = await api.delete('/users/1/orders/1').send({'token':permession});
        expect(res.status).toBe(200);
        
    })
})
