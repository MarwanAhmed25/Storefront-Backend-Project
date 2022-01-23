import supertest from "supertest";
import route from '../../index';
import { User, user } from "../../models/users";


const user_ = new User();
const api = supertest(route);

describe('users handlars api test',()=>{

    it('users index route',async ()=>{
        const res = await api.get('/users');
        expect(res.status).toBe(200);
    })

    it('users show route',async ()=>{
        
        const res = await api.get('/users/1');
        expect(res.status).toBe(200);
    })

    it('users create route',async ()=>{
        const d={
            'first_name':'marwan',
            'last_name':'ahmed',
            'password':'marwan'
        }
        const res = await api.post('/users').send(d);
        expect(res.status).toBe(200);
    })

    it('users update route',async ()=>{
        const d={
            'first_name':'bassam',
            'last_name':'ahmed'
        }
        const res = await api.patch('/users/1').send(d);
        expect(res.status).toBe(200);
    })

    it('users login route',async ()=>{
        const d ={
            "username":'marwan',
            "password":"marwan"
        }

        const res = await api.post('/login').send(d);
        expect(res.status).toBe(200);
    })

    it('users delete route',async ()=>{
        const res = await api.delete('/users/2');
        expect(res.status).toBe(200);

    })
})