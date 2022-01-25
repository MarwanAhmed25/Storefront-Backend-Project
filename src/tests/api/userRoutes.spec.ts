import supertest from "supertest";
import route from '../../index';
import { User, user } from "../../models/users";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const secret:string = (process.env.token as unknown)as string;

const user_ = new User();
const api = supertest(route);
let token:string;

describe('users handlars api test',()=>{

    it('users index route',async ()=>{
        const u:user= {
            id: 1,
            first_name: 'maro',
            last_name: 'nnn',
            password: '$2b$05$N3b8OrzeaE2E/Kwqu1PCH.Zdy9wNEwPUD3TY9RtZXZX6gGjATSYUu'
        };
        token = jwt.sign({user:u}, secret);
        const res = await api.get('/users').send({'token':token});
        expect(res.status).toBe(200);
    })

    it('users show route',async ()=>{
        
        const res = await api.get('/users/1').send({'token':token});
        expect(res.status).toBe(200);
    })

    it('users create route',async ()=>{
        
        const d={
            'first_name':'marwan',
            'last_name':'ahmed',
            'password':'marwan'
        }
        const res = await api.post('/users').send(d);
        token = jwt.sign({user:res}, secret);
        expect(res.status).toBe(200);
    })

    it('users update route',async ()=>{
        const d={
            'first_name':'bassam',
            'last_name':'ahmed',
            'token':token
        }
        const res = await api.patch('/users/1').send(d);
        expect(res.status).toBe(200);
    })

    it('users login route',async ()=>{
        const d ={
            'token':token
        }

        const res = await api.post('/login').send(d);
        expect(res.status).toBe(200);
    })

    it('users get token route',async ()=>{
        const res = await api.get('/users/2/get_token').send({'token':token});
        expect(res.status).toBe(200); 
        
    })

    it('users delete route',async ()=>{
        const res = await api.delete('/users/2').send({'token':token});
        expect(res.status).toBe(200); 
        
    })

})