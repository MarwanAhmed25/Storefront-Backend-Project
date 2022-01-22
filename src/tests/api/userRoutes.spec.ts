import supertest from "supertest";
import route from '../../handlars/users';

const api = supertest(route);

describe('user handlars api test',()=>{

    it('/users route test',async ()=>{
        const res = await api.get('/users');
        expect(res.status).toBe(200);
    })

    it('/users route test',async ()=>{
        const res = await api.get('/users/1');
        expect(res.status).toBe(200);
    })

    it('/users route test',async ()=>{
        const res = await api.post('/users');
        expect(res.status).toBe(200);
    })

    it('/users route test',async ()=>{
        const res = await api.post('/users/1');
        expect(res.status).toBe(200);
    })

    it('/users route test',async ()=>{
        const res = await api.post('/login');
        expect(res.status).toBe(200);
    })

    it('/users route test',async ()=>{
        const res = await api.delete('/users/1');
        expect(res.status).toBe(200);
    })
})