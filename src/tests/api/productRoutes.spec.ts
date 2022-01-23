import supertest from "supertest";
import route from '../../index';
import { User, user } from "../../models/users";


const user_ = new User();
const api = supertest(route);

describe('products handlars api test',()=>{

    it('products index route',async ()=>{
        const res = await api.get('/products');
        expect(res.status).toBe(200);
    })

    it('products show route',async ()=>{
        
        const res = await api.get('/products/1');
        expect(res.status).toBe(200);
    })
    //name, price, catogery
    it('products create route',async ()=>{
        const d={
            'name':'marwan',
            'price':5,
            'catogery':'marwan'
        }
        const res = await api.post('/products').send(d);
        expect(res.status).toBe(200);
    })
    //name, price category
    it('products update route',async ()=>{
        const d={
            'name':'marwan',
            'price':20,
            'catogery':'marwan'
        }
        const res = await api.patch('/products/1').send(d);
        expect(res.status).toBe(200);
    })

    it('products delete route',async ()=>{
        const res = await api.delete('/products/2');
        expect(res.status).toBe(200);
    })
})