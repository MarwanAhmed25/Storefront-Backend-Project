import supertest from "supertest";
import route from '../../index';
import { User, user } from "../../models/users";


const user_ = new User();
const api = supertest(route);
const permession = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoibWFybyIsImxhc3RfbmFtZSI6Im5ubiIsInBhc3N3b3JkIjoiJDJiJDA1JG1sM0doNVc1ZllsUWwuZU1Bd25BTk9hWHhMRnJVczVDTVl4ZVVab1ZYVTBQb2RxbzUxaXUyIn0sImlhdCI6MTY0MzA1MzU4OH0.1_ZVriOVv5O3umt_k9pikDcRceWBJBIMjN1F09MXA8Y`;

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
            'catogery':'marwan',
            'token':permession
        }
        const res = await api.post('/products').send(d);
        expect(res.status).toBe(200);
    })
    //name, price category
    it('products update route',async ()=>{
        const d={
            'name':'marwan',
            'price':20,
            'catogery':'marwan',
            'token':permession
        }
        const res = await api.patch('/products/1').send(d);
        expect(res.status).toBe(200);
    })

    it('products delete route',async ()=>{
        const res = await api.delete('/products/2').send({'token':permession});
        expect(res.status).toBe(200);

        console.log(await user_.index());
        //console.log(await product.index());
        
    })
})